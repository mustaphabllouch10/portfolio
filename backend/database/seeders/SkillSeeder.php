<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    public function run(): void
    {
        $skills = [
            ['group' => 'Frontend', 'name' => 'React', 'level' => 'Advanced', 'icon' => '⚛️', 'progress' => 92],
            ['group' => 'Frontend', 'name' => 'JavaScript', 'level' => 'Advanced', 'icon' => '📜', 'progress' => 90],
            ['group' => 'Frontend', 'name' => 'Tailwind', 'level' => 'Advanced', 'icon' => '🪄', 'progress' => 93],
            ['group' => 'Backend', 'name' => 'Laravel', 'level' => 'Advanced', 'icon' => '🧱', 'progress' => 90],
            ['group' => 'Backend', 'name' => 'PHP', 'level' => 'Intermediate', 'icon' => '🐘', 'progress' => 86],
            ['group' => 'Databases', 'name' => 'MySQL', 'level' => 'Advanced', 'icon' => '🗄️', 'progress' => 88],
            ['group' => 'Tools', 'name' => 'Git', 'level' => 'Advanced', 'icon' => '🧰', 'progress' => 90],
            ['group' => 'Tools', 'name' => 'Docker', 'level' => 'Learning', 'icon' => '🐳', 'progress' => 60],
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }
    }
}
