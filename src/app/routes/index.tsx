import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div class="space-y-4">
      <h1 class="text-3xl font-bold">Welcome to TanStack Start + Astro!</h1>
      <p class="text-gray-600">
        This is a TanStack Start application integrated with Astro.
      </p>
      <div class="bg-blue-50 p-4 rounded-lg">
        <h2 class="text-xl font-semibold mb-2">Features:</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>File-based routing with TanStack Router</li>
          <li>Server-side rendering with Astro</li>
          <li>React components with full interactivity</li>
          <li>Tailwind CSS for styling</li>
        </ul>
      </div>
    </div>
  )
}
