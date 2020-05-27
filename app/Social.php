<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Social extends Model
{
    protected $table = 'social';

    protected $with = ['network'];

    public $timestamps = false;

    public function network(){

      return $this->belongsTo(SocialNetwork::class, 'id_network');
        
    }

    public function contact(){

      return $this->belongsTo(Contact::class, 'id_contact');

    }

}
