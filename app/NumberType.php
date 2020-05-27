<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NumberType extends Model
{

    public $timestamps = false;

    public function number(){

        return $this->hasMany(Number::class, 'id_type');
        
    }

}
