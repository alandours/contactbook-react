<?php

use Illuminate\Database\Seeder;

class EmailTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $types = [
            ['id' => 1, 'name' => 'Personal'],
            ['id' => 2, 'name' => 'Secondary'],
            ['id' => 3, 'name' => 'Work'],
            ['id' => 999, 'name' => 'Custom'],
            
        ];

        DB::table('email_types')->insert($types);

    }
}
