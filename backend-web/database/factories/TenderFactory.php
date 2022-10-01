<?php

namespace Database\Factories;

use App\Models\Tender;
use Illuminate\Database\Eloquent\Factories\Factory;

class TenderFactory extends Factory
{

    protected $model = Tender::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'tender_number'=>$this->faker->word,
            'tender_title'=>$this->faker->word,
            'tender_des'=>$this->faker->paragraphs($nb = 3, $asText = true),
            'open_date'=>$this->faker->dateTime($max = 'now', $timezone = null),
            'close_date'=>$this->faker->dateTime($max = 'now', $timezone = null),            
            'attachment'=>$this->faker->word,
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
