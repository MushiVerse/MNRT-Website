<?php

namespace Database\Factories;

use App\Models\Kalenda;
use Illuminate\Database\Eloquent\Factories\Factory;

class KalendaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'event_name'=>$this->faker->name,
            'event_des'=>$this->faker->word,
            'location'=>$this->faker->word,
            'event_date'=>$this->faker->date($format = 'Y-m-d', $max = 'now'),
            'end_date'=>$this->faker->date($format = 'Y-m-d', $max = 'now'),
            'participants'=>$this->faker->name,
            'guest_of_honor'=>$this->faker->name,
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
