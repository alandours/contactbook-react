<?php

use Illuminate\Database\Seeder;

class NumberTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $types = [
            ['id' => 1, 'name' => 'Home'],
            ['id' => 2, 'name' => 'Mobile'],
            ['id' => 3, 'name' => 'Secondary'],
            ['id' => 4, 'name' => 'Work'],
            ['id' => 999, 'name' => 'Custom'],
            
        ];

        DB::table('number_types')->insert($types);

    }
}
