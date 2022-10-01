<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Speech;
use Faker\Factory as Faker;
use DB;

class SpeechSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Speech::factory(45)->create();
    }
}
