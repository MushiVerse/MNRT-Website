<?php

namespace Database\Factories;

use App\Models\Leader;
use Illuminate\Database\Eloquent\Factories\Factory;

class LeaderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Leader::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'leader_name'=>$this->faker->name,
            'leader_title'=>$this->faker->sentence($nbWords = 3, $variableNbWords = true),
            'facebook_link'=>$this->faker->url,
            'instagram_link'=>$this->faker->url,
            'twitter_link'=>$this->faker->url,
            'start_date'=>$this->faker->date($format = 'Y-m-d', $max = 'now'),
            'end_date'=>$this->faker->date($format = 'Y-m-d', $max = 'now'),
            'picture'=>$this->faker->word,
            'biography'=>$this->faker->paragraph($nbSentences = 5, $variableNbSentences = true),
            'created_by'=>$this->faker->name,
            'updated_by'=>$this->faker->name,
            'deleted_by'=>$this->faker->name,
            'status'=>$this->faker->boolean,
            'created_at'=>$this->faker->dateTime($max = 'now', $timezone = null),
            'updated_at'=>$this->faker->dateTime($max = 'now', $timezone = null),
            'deleted_at'=>$this->faker->dateTime($max = 'now', $timezone = null),
        ];
    }
}
