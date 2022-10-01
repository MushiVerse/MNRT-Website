<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Director;
use Faker\Factory as Faker;
use DB;

class DirectorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Director::factory(45)->create();
    }
}
