<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Ramani;
use Faker\Factory as Faker;
use DB;

class RamaniSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Ramani::factory(45)->create();
    }
}
