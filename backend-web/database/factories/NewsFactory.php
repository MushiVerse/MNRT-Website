<?php

namespace Database\Factories;

use App\Models\News;
use Illuminate\Database\Eloquent\Factories\Factory;

class NewsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = News::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
    
            'news_title'=>$this->faker->word,
            'news_des'=>$this->faker->sentences($nb = 3, $asText = true),
            'pub_date'=>$this->faker->dateTime($max = 'now', $timezone = null),
            'exp_date'=>$this->faker->dateTime($max = 'now', $timezone = null),
            'video_link'=>$this->faker->word,
            'image_link'=>$this->faker->word,
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
