<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Mifumo;
use Faker\Factory as Faker;
use DB;

class MifumoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Mifumo::factory(45)->create();

    }
}
