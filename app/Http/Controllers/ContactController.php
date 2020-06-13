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
                  ->select(['id', 'name', 'lastname'])
                  ->orderBy('name', 'ASC')
                  ->get();
  }

  public function search($text) {
    $text = preg_replace('/\s+/', '', $text);

    return DB::select('SELECT * FROM 
                        (SELECT CONCAT_WS(" ", name, lastname) AS fullname, name, lastname, address, notes, contacts.id AS id, email, number, username FROM contacts
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
                        OR REPLACE(email, " ", "") LIKE ?
                        OR REPLACE(number, " ", "") LIKE ?
                        OR REPLACE(username, " ", "") LIKE ?)
                        ORDER BY name ASC', ['%'.$text.'%', '%'.$text.'%', '%'.$text.'%', '%'.$text.'%', '%'.$text.'%', '%'.$text.'%', '%'.$text.'%', '%'.$text.'%']);

  }

  public function get($id) {
    try{
      if ($id == null) {
        $contact = Contact::orderBy('name', 'ASC')->firstOrFail();
      } else {
        $contact = Contact::findOrFail($id);
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

  public function update($id, Request $request) {
    $data = json_decode($request->data, true);

    $validationErrors = $this->validateContact($data);

    if (count($validationErrors)) {
      return response()->json([
        'type' => 'error',
        'message' => 'The data is invalid',
        'errors' => json_encode($validationErrors)
      ]);
    }

    if ($this->updateMainInfo($id, $data)) {
      $image_data = $request->file('image');

      if ($data['removeImage']) {
        $this->updatePhoto($id, null);
      } else if (isset($image_data)) {
        $photo = $this->uploadPhoto($id, $image_data);
        $this->updatePhoto($id, $photo);
      }

      $updateAliases = $this->handleAliases($id, $data);
      $updateNumbers = $this->handleNumbers($id, $data);
      $updateEmails = $this->handleEmails($id, $data);
      $updateSocialNetworks = $this->handleSocialNetworks($id, $data);

      return response()->json([
        'type' => 'success',
        'message' => 'The contact was updated succesfully',
        'contact' => $this->get($id)
      ]);
    } else {
      return response()->json([
        'type' => 'error',
        'message' => 'There was an error updating the contact',
        'contact' => $this->get($id)
      ]);
    }
  }

  private function validateContact($data) {
    $rules = [
      'name' => 'required|max:50',
      'lastname' => 'max:50',
      'birthday' => 'nullable|date_format:Y-m-d|before_or_equal:today',
      'address' => 'max:50',
      'notes' => 'max:1000',
      'met' => 'nullable|date_format:Y|after_or_equal:1000',
      'aliases' => 'array',
      'aliases.*.alias' => 'max:50',
      'emails' => 'array',
      'emails.*.email' => 'max:80',
      'numbers' => 'array',
      'numbers.*.number' => 'max:50',
      'socialNetworks' => 'array',
      'socialNetworks.*.username' => 'max:80',
    ];

    $validator = Validator::make($data, $rules);

    return $validator->errors()->all();
  }

  private function updateMainInfo($id, $data) {
    return Contact::where('id', $id)
                  ->where('active', 1)
                  ->update([
                      'name' => $data['name'],
                      'lastname' => $data['lastname'],
                      'birthday' => $data['birthday'],
                      'address' => $data['address'],
                      'notes' => $data['notes'],
                      'met' => $data['met']
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

  private function handleAliases($id, $data) {
    $aliases = $data['aliases'];

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

  private function handleNumbers($id, $data) {
    $numbers = $data['numbers'];

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

  private function handleEmails($id, $data) {
    $emails = $data['emails'];

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

  private function handleSocialNetworks($id, $data) {
    $socialNetworks = $data['social'];

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
}
