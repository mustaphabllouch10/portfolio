<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        Project::create([
            'title' => 'Northstar Analytics',
            'description' => 'A modern analytics dashboard built for product teams to understand usage and engagement in real time.',
            'image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
            'technologies' => ['React', 'Laravel', 'MySQL', 'Tailwind'],
            'features' => ['Real-time KPIs', 'Role-based access', 'Interactive charts'],
            'challenges' => ['Handling high-volume event data', 'Designing a maintainable API'],
            'lessons' => ['Invest in API contracts early', 'Favor progressive enhancement'],
            'github' => 'https://github.com',
            'demo' => 'https://example.com',
        ]);

        Project::create([
            'title' => 'Lumen Commerce',
            'description' => 'An elegant commerce experience designed for speed, clarity, and seamless checkout.',
            'image' => 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
            'technologies' => ['React', 'Node', 'MongoDB', 'Express'],
            'features' => ['Search and filtering', 'Checkout flow', 'CMS content blocks'],
            'challenges' => ['Optimizing performance', 'Simplifying checkout complexity'],
            'lessons' => ['Measure before refactoring', 'Use server-side validation'],
            'github' => 'https://github.com',
            'demo' => 'https://example.com',
        ]);
    }
}
