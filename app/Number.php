<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Number extends Model
{

    public $timestamps = false;

    protected $with = ['type'];

    public function contact(){

        return $this->belongsTo(Contact::class, 'id_contact');
        
    }

    public function type(){

        return $this->belongsTo(NumberType::class, 'id_type');
        
    }
    
}
