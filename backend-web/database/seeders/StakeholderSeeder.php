<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Stakeholder;
use Faker\Factory as Faker;
use DB;

class StakeholderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Stakeholder::factory(45)->create();
    }
}
