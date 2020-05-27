<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
      $this->call(EmailTypesTableSeeder::class);
      $this->call(NumberTypesTableSeeder::class);
      $this->call(SocialNetworksTableSeeder::class);
    }
}
