<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;


class ProjectFactory extends Factory
{

    protected $model = Project::class;
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'project_title'=>$this->faker->title,
            'project_details'=>$this->faker->word,
            'project_cost'=>$this->faker->word,
            'project_funder'=>$this->faker->name,
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
