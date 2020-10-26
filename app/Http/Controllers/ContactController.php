<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Redirect;
use Intervention\Image\ImageManagerStatic as Image;
use Validator;

use App\Http\Controllers\Controller;
use App\Alias;
use App\Contact;
use App\Email;
use App\EmailType;
use App\Number;
use App\NumberType;
use App\Social;
use App\SocialNetwork;

class ContactController extends Controller
{
  public function getAppData() {
    $numberTypes = NumberType::get();
    $emailTypes = EmailType::get();
    $socialNetworks = SocialNetwork::get();

    return compact('numberTypes', 'emailTypes', 'socialNetworks');
  }

  public function list() {
    return Contact::where('active', 1)
                  ->select(['id', 'name', 'lastname', 'birthday', 'address', 'met', 'photo'])
                  ->orderBy('name', 'ASC')
                  ->get();
  }

  public function search($text) {
    $text = preg_replace('/\s+/', '', $text);

    return DB::select('SELECT * FROM 
                        (SELECT CONCAT_WS(" ", name, lastname) AS fullname, name, lastname, address, notes, contacts.id AS id, alias, email, number, username FROM contacts
                        LEFT JOIN alias ON contacts.id = alias.id_contact
                        LEFT JOIN emails ON contacts.id = emails.id_contact
                        LEFT JOIN numbers ON contacts.id = numbers.id_contact
                        LEFT JOIN social ON contacts.id = social.id_contact
                        WHERE active = 1
                        GROUP BY id) AS fields 
                        WHERE (REPLACE(fullname, " ", "") LIKE ?
                        OR REPLACE(name, " ", "") LIKE ?
                        OR REPLACE(lastname, " ", "") LIKE ?
                        OR REPLACE(address, " ", "") LIKE ?
                        OR REPLACE(notes, " ", "") LIKE ?
                        OR REPLACE(alias, " ", "") LIKE ?
                        OR REPLACE(email, " ", "") LIKE ?
                        OR REPLACE(number, " ", "") LIKE ?
                        OR REPLACE(username, " ", "") LIKE ?)
                        ORDER BY name ASC', ['%'.$text.'%', '%'.$text.'%', '%'.$text.'%', '%'.$text.'%', '%'.$text.'%', '%'.$text.'%', '%'.$text.'%', '%'.$text.'%', '%'.$text.'%']);

  }

  public function get($id) {
    try{
      if ($id == null) {
        $contact = Contact::where('active', 1)->orderBy('name', 'ASC')->firstOrFail();
      } else {
        $contact = Contact::where('active', 1)->findOrFail($id);
      }
    } catch(ModelNotFoundException $e) {
      return null;
    }

    $contact->fullName = $this->getFullName($contact->name, $contact->lastname);
    $contact->photo = $contact->photo ?? 'contact.jpg';

    return $contact;
  }

  private function getFullName($name, $lastname) {
    return $lastname !== null ? $name.' '.$lastname : $name;
  }

  private function validateContact($request) {
    $rules = [
      'name' => 'required|max:50',
      'lastname' => 'nullable|max:50',
      'birthday' => 'nullable|before_or_equal:today',
      'address' => 'nullable|max:50',
      'notes' => 'nullable|max:1000',
      'met' => 'nullable|date_format:Y|after_or_equal:1900',
      'aliases' => 'nullable|array',
      'aliases.*.alias' => 'max:50',
      'emails' => 'nullable|array',
      'emails.*.email' => 'max:80',
      'numbers' => 'nullable|array',
      'numbers.*.number' => 'max:50',
      'social' => 'nullable|array',
      'social.*.username' => 'max:80',
    ];

    $validator = Validator::make($request->all(), $rules);

    return $validator->errors()->all();
  }

  public function add(Request $request) {
    $request->merge([
      'aliases' => json_decode($request->aliases, true),
      'numbers' => json_decode($request->numbers, true),
      'emails' => json_decode($request->emails, true),
      'social' => json_decode($request->social, true)
    ]);

    $validationErrors = $this->validateContact($request);

    if (count($validationErrors)) {
      return response()->json([
        'type' => 'error',
        'message' => 'The was an error validating the contact data on the server',
        'errors' => $validationErrors
      ]);
    }

    if ($id = $this->create($request)) {
      $image_data = $request->file('image');

      if ($request->removeImage === 'true') {
        $this->updatePhoto($id, null);
      } else if ($image_data) {
        $photo = $this->uploadPhoto($id, $image_data);
        $this->updatePhoto($id, $photo);
      }

      if ($request->aliases)
        $this->handleAliases($id, $request->aliases);

      if ($request->numbers)
        $this->handleNumbers($id, $request->numbers);

      if ($request->emails)
        $this->handleEmails($id, $request->emails);

      if ($request->social)
        $this->handleSocialNetworks($id, $request->social);

      $contact = $this->get($id);

      return response()->json([
        'type' => 'success',
        'message' => $contact->fullName.' was added to your contacts',
        'contact' => $contact
      ]);
    } else {
      return response()->json([
        'type' => 'error',
        'message' => 'There was an error adding the contact'
      ]);
    }
  }

  private function create($data){
    $contact = Contact::create([
                'name' => $data['name'],
                'lastname' => $data['lastname'],
                'birthday' => $data['birthday'],
                'address' => $data['address'],
                'notes' => $data['notes'],
                'met' => $data['met']
              ]);

    return $contact->id;
  }

  public function update($id, Request $request) {
    $request->merge([
      'aliases' => json_decode($request->aliases, true),
      'numbers' => json_decode($request->numbers, true),
      'emails' => json_decode($request->emails, true),
      'social' => json_decode($request->social, true)
    ]);

    $validationErrors = $this->validateContact($request);

    if (count($validationErrors)) {
      return response()->json([
        'type' => 'error',
        'message' => 'The was an error validating the contact data on the server',
        'errors' => $validationErrors
      ]);
    }

    if ($this->updateMainInfo($id, $request)) {
      $image_data = $request->file('image');

      if ($request->removeImage === 'true') {
        $this->updatePhoto($id, null);
      } else if ($image_data) {
        $photo = $this->uploadPhoto($id, $image_data);
        $this->updatePhoto($id, $photo);
      }

      if ($request->aliases)
        $this->handleAliases($id, $request->aliases);

      if ($request->numbers)
        $this->handleNumbers($id, $request->numbers);

      if ($request->emails)
        $this->handleEmails($id, $request->emails);

      if ($request->social)
        $this->handleSocialNetworks($id, $request->social);

      $contact = $this->get($id);

      return response()->json([
        'type' => 'success',
        'message' => $contact->fullName.' was updated',
        'contact' => $contact
      ]);
    } else {
      $contact = $this->get($id);

      return response()->json([
        'type' => 'error',
        'message' => 'There was an error updating '.$contact->fullName,
        'contact' => $contact
      ]);
    }
  }

  private function updateMainInfo($id, $request) {
    return Contact::where('id', $id)
                  ->where('active', 1)
                  ->update([
                      'name' => $request->name,
                      'lastname' => $request->lastname,
                      'birthday' => $request->birthday,
                      'address' => $request->address,
                      'notes' => $request->notes,
                      'met' => $request->met
                  ]);
  }

  private function updatePhoto($id, $photo) {
    Contact::find($id)->update(['photo' => $photo]);
  }

  private function uploadPhoto($id, $image_data) {
    $image = Image::make($image_data);
    $name = ($id + 1000000).'_'.sha1(date('YmdHis')).'.jpg';
    $destination = public_path().'/img/contacts/'.$name;

    $image->resize(1600, 1600, function ($constraint) {
        $constraint->aspectRatio();
        $constraint->upsize();
    });

    $orientation = $image->exif('Orientation');

    switch($orientation) {
      case 3:
        $image->rotate(180);
        break;
      case 6:
        $image->rotate(-90);
        break;
      case 8:
        $image->rotate(90);
        break;
    }
  
    $image->save($destination);

    return $name;
  }

  private function handleAliases($id, $aliases) {
    /* Delete aliases that were deleted by the user */
    $aliasesToKeep = $this->getIds($aliases);
    Alias::where('id_contact', $id)->whereNotIn('id', $aliasesToKeep)->delete();

    /* Update aliases or create new ones */
    foreach($aliases as $alias) {
      if ($alias['alias']) {
        Alias::updateOrCreate(
          ['id_contact' => $id, 'id' => $alias['id']],
          ['alias' => $alias['alias']]
        );
      }
    }
  }

  private function handleNumbers($id, $numbers) {
    /* Delete phone numbers that were deleted by the user */
    $numbersToKeep = $this->getIds($numbers);
    Number::where('id_contact', $id)->whereNotIn('id', $numbersToKeep)->delete();

    /* Update phone numbers or create new ones */
    foreach($numbers as $number) {
      if ($number['number'] && $number['type']) {
        $customLabel = $this->getLabel($number);

        Number::updateOrCreate(
          ['id_contact' => $id, 'id' => $number['id']],
          ['number' => $number['number'], 'id_type' => $number['type'], 'custom_label' => $customLabel]
        );
      }
    }
  }

  private function handleEmails($id, $emails) {
    /* Delete emails that were deleted by the user */
    $emailsToKeep = $this->getIds($emails);
    Email::where('id_contact', $id)->whereNotIn('id', $emailsToKeep)->delete();

    /* Update emails or create new ones */
    foreach($emails as $email) {
      if ($email['email'] && $email['type']) {
        $customLabel = $this->getLabel($email);

        Email::updateOrCreate(
          ['id_contact' => $id, 'id' => $email['id']],
          ['email' => $email['email'], 'id_type' => $email['type'], 'custom_label' => $customLabel]
        );
      }
    }
  }

  private function handleSocialNetworks($id, $socialNetworks) {
    /* Delete social networks that were deleted by the user */
    $socialNetworksToKeep = $this->getIds($socialNetworks);
    Social::where('id_contact', $id)->whereNotIn('id', $socialNetworksToKeep)->delete();

    /* Update social networks or create new ones */
    foreach($socialNetworks as $social) {
      
      if ($social['username'] && $social['id_network']) {
        $customLabel = $this->getLabel($social);

        Social::updateOrCreate(
          ['id_contact' => $id, 'id' => $social['id']],
          ['username' => $social['username'], 'id_network' => $social['id_network'], 'custom_label' => $customLabel]
        );
      }
    }
  }

  private function getIds($fields) {
    return array_map(function($field) {
      return $field['id'];
    }, $fields);
  }

  private function getLabel($field) {
    $isCustomType = isset($field['type']) && $field['type'] === '999';
    $isCustomNetwork = isset($field['id_network']) && $field['id_network'] === '999';

    if ($isCustomType || $isCustomNetwork) {
      return isset($field['custom_label']) ? $field['custom_label'] : 'Custom';
    } else {
      return null;
    }
  }

  public function delete($id) {
    $contact = $this->get($id);

    if (Contact::where('id', $id)->where('active', 1)->update(['active' => 0])) {
      return response()->json([
        'type' => 'success',
        'message' => $contact->fullName.' was deleted from your contacts'
      ]);
    }

    return response()->json([
      'type' => 'error',
      'message' => 'There was an error deleting '.$contact->fullName,
      'contact' => $contact
    ]);
  }
}
