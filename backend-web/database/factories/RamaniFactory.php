<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class RamaniFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'file_link'=>$this->faker->word,
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
