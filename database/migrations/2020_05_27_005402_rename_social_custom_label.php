<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RenameSocialCustomLabel extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('social', function (Blueprint $table) {
          $table->renameColumn('custom_tag', 'custom_label');
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
          $table->renameColumn('custom_label', 'custom_tag');
        });
    }
}
