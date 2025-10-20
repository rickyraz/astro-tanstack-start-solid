import {createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/ini')({
    component: AboutComponent,
})

function AboutComponent() {
    return (
        <div class="space-y-4">
            <h1 class="text-3xl font-bold">About This Project</h1>
            <p class="text-gray-600">
                This project demonstrates the integration of TanStack Start with Astro.
            </p>
            <div class="bg-green-50 p-4 rounded-lg">
                <h2 class="text-xl font-semibold mb-2">Tech Stack:</h2>
                <ul class="list-disc list-inside space-y-1">
                    <li>Astro 5.x - The web framework</li>
                    <li>TanStack Start - Type-safe routing and data fetching</li>
                    <li>React 19 - UI library</li>
                    <li>Tailwind CSS 4.x - Styling</li>
                </ul>
            </div>
        </div>
    )
}
