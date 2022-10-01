<?php

namespace Database\Factories;

use App\Models\Speech;
use Illuminate\Database\Eloquent\Factories\Factory;

class SpeechFactory extends Factory
{

    protected $model = Speech::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'speech_title'=>$this->faker->title,
            'author'=>$this->faker->name,
            'location'=>$this->faker->city,
            'speech_date'=>$this->faker->dateTime($max = 'now', $timezone = null),
            'text_link'=>$this->faker->word,
            'audio_link'=>$this->faker->word,
            'video_link'=>$this->faker->word,
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
