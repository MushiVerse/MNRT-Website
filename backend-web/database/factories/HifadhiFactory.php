<?php

namespace Database\Factories;
use App\Models\Hifadhi;
use Illuminate\Database\Eloquent\Factories\Factory;

class HifadhiFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'=>$this->faker->name,
            'description'=>$this->faker->sentence($nbWords = 3, $variableNbWords = true),
            'category'=>$this->faker->date($format = 'Y-m-d', $max = 'now'),
            'latitude'=>$this->faker->randomDigit,
            'longitude'=>$this->faker->randomDigit,
            'size'=>$this->faker->numberBetween($min = 1000, $max = 9000),
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
