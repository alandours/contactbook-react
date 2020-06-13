<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Number extends Model
{
  protected $with = ['type'];
  protected $fillable = ['id_contact', 'id_type', 'number', 'custom_label'];

  public $timestamps = false;

  public function contact(){
    return $this->belongsTo(Contact::class, 'id_contact');
  }

  public function type(){
    return $this->belongsTo(NumberType::class, 'id_type');
  }

}
