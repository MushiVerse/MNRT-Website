<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Leader;
use Faker\Factory as Faker;
use DB;

class LeaderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Leader::factory(45)->create();
    }
}
