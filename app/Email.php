<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Email extends Model
{
  protected $with = ['type'];
  protected $fillable = ['id_contact', 'id_type', 'email', 'custom_label'];

  public $timestamps = false;

  public function contact(){
    return $this->belongsTo(Contact::class, 'id_contact');
  }

  public function type(){
    return $this->belongsTo(EmailType::class, 'id_type');
  }
}
