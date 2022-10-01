<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Kalenda;
use Faker\Factory as Faker;
use DB;


class KalendaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Kalenda::factory(45)->create();
    }
}
