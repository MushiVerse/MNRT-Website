<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Management;
use Faker\Factory as Faker;
use DB;


class ManagementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Management::factory(45)->create();
    }
}
