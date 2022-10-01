<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Hifadhi;
use Faker\Factory as Faker;
use DB;

class HifadhiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Hifadhi::factory(45)->create();
    }
}
