<?php

namespace Database\Seeders;

use App\Models\Experience;
use Illuminate\Database\Seeder;

class ExperienceSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            ['title' => 'Education', 'period' => '2020 — Present', 'description' => 'Studied software engineering principles, modern architecture, and independent product development.'],
            ['title' => 'Internship', 'period' => '2023', 'description' => 'Contributed to internal tools, debugging workflows, and API integrations in a fast-moving startup environment.'],
            ['title' => 'Personal Projects', 'period' => '2021 — Present', 'description' => 'Built polished web experiences with a focus on maintainability, speed, and developer experience.'],
        ];

        foreach ($items as $item) {
            Experience::create($item);
        }
    }
}
