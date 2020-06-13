<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
  protected $guarded = ['id', 'active'];
  protected $with = ['aliases', 'numbers', 'emails', 'social'];

  public function aliases(){
    return $this->hasMany(Alias::class, 'id_contact');
  }

  public function numbers(){
    return $this->hasMany(Number::class, 'id_contact');
  }

  public function emails(){
    return $this->hasMany(Email::class, 'id_contact');
  }

  public function social(){
    return $this->hasMany(Social::class, 'id_contact');
  }
}
