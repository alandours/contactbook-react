<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateForeignIdNetworkSocial extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('social', function (Blueprint $table) {
          $table->dropForeign(['id_network']);
          $table->foreign('id_network')->references('id')->on('social_networks');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('social', function (Blueprint $table) {
          $table->dropForeign(['id_network']);
          $table->foreign('id_network')->references('id')->on('networks');
        });
    }
}
