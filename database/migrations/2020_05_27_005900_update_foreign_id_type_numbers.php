<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateForeignIdTypeNumbers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('numbers', function (Blueprint $table) {
          $table->dropForeign(['id_type']);
          $table->foreign('id_type')->references('id')->on('number_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('numbers', function (Blueprint $table) {
          $table->dropForeign(['id_type']);
          $table->foreign('id_type')->references('id')->on('types');
        });
    }
}
