<?php

namespace Database\Factories;

use App\Models\Stakeholder;
use Illuminate\Database\Eloquent\Factories\Factory;

class StakeholderFactory extends Factory
{

    protected $model = Stakeholder::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'category'=>$this->faker->word,
            'sthdr_name'=>$this->faker->name,           
            'phone' => $this->faker->phoneNumber,
            'email' => $this->faker->unique()->safeEmail(),           
            'postal_address'=>$this->faker->word,
            'physical_address'=>$this->faker->word,
            'country'=>$this->faker->word,           
            'website' => $this->faker->word,
            'licence_status'=>$this->faker->word,           
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
