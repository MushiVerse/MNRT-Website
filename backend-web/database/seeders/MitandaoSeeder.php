<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Mitandao;
use Faker\Factory as Faker;
use DB;


class MitandaoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Mitandao::factory(45)->create();
    }
}
