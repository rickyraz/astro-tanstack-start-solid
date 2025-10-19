import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Welcome to TanStack Start + Astro!</h1>
      <p className="text-gray-600">
        This is a TanStack Start application integrated with Astro.
      </p>
      <div className="bg-blue-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Features:</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>File-based routing with TanStack Router</li>
          <li>Server-side rendering with Astro</li>
          <li>React components with full interactivity</li>
          <li>Tailwind CSS for styling</li>
        </ul>
      </div>
    </div>
  )
}
