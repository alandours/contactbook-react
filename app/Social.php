<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Social extends Model
{
  protected $table = 'social';
  protected $with = ['network'];
  protected $fillable = ['id_contact', 'id_network', 'username', 'custom_label'];

  public $timestamps = false;

  public function contact(){
    return $this->belongsTo(Contact::class, 'id_contact');
  }

  public function network(){
    return $this->belongsTo(SocialNetwork::class, 'id_network');
  }
}
