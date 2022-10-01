<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Leader;
use App\Models\News;
use App\Models\Advertisement;
use App\Models\Announcement;
use App\Models\Contact;
use App\Models\Department;
use App\Models\Director;
use App\Models\Document;
use App\Models\Kalenda;
use App\Models\Gallery;
use App\Models\Speech;
use App\Models\Stakeholder;
use App\Models\Mifumo;
use App\Models\Statistic;
use App\Models\Tender;
use App\Models\Hifadhi;
use App\Models\Tovuti;
use App\Models\Mitandao;
use App\Models\Ramani;
use App\Models\Management;



use Faker\Factory as Faker;
use DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            LeaderSeeder::class,
            NewsSeeder::class,
            AdvertisementSeeder::class,
            AnnouncementSeeder::class,
            ContactSeeder::class,
            DepartmentSeeder::class,
            DirectorSeeder::class,
            DocumentSeeder::class,
            KalendaSeeder::class,
            GallerySeeder::class,
            SpeechSeeder::class,
            MifumoSeeder::class,
            StakeholderSeeder::class,
            StatisticSeeder::class,
            TenderSeeder::class,
            HifadhiSeeder::class,
            TovutiSeeder::class,
            MitandaoSeeder::class,
            RamaniSeeder::class,
            ManagementSeeder::class,

  ]);
    }
}
