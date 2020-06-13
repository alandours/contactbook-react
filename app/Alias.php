<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Alias extends Model
{
  protected $table = 'alias';
  protected $fillable = ['id_contact', 'alias'];

  public $timestamps = false;

  public function contact(){
    return $this->belongsTo(Contact::class, 'id_contact');
  }
}
