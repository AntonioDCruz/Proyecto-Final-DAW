<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class JugadorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'numero' => $this->faker->numberBetween(0, 99),
            'posicion' => $this->faker->name(),
            'image' => $this->faker->imageUrl(),
            'user_id' => $this->faker->numberBetween(1, 13)
        ];
    }
}
