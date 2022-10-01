<?php

namespace Database\Factories;

use App\Models\Mifumo;
use Illuminate\Database\Eloquent\Factories\Factory;

class MifumoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'system_name'=>$this->faker->word,
            'system_link'=>$this->faker->word,
            'system_des'=>$this->faker->sentence($nbWords = 3, $variableNbWords = true),
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
