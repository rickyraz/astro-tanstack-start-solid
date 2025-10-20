// import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { createRootRoute, createRootRouteWithContext, Link, Outlet } from '@tanstack/solid-router'
import { TanStackRouterDevtools } from '@tanstack/solid-router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">404 - Page Not Found</h1>
        <p class="mb-4">The page you are looking for does not exist.</p>
        <Link to="/" class="text-blue-600 hover:text-blue-800">
          Go back to home
        </Link>
      </div>
    )
  },
})

function RootComponent() {
  return (
    <>
      <div class="p-4">
        <nav class="flex gap-4 mb-4 border-b pb-4">
          <Link
            to="/ini"
            class="text-blue-600 hover:text-blue-800 [&.active]:font-bold"
          >
            ini
          </Link>
          <Link
            to="/"
            class="text-blue-600 hover:text-blue-800 [&.active]:font-bold"
          >
            Home
          </Link>
          <Link
            to="/about"
            class="text-blue-600 hover:text-blue-800 [&.active]:font-bold"
          >
            About
          </Link>
          <a
            href="/blog"
            class="text-blue-600 hover:text-blue-800"
          >
            Blog (Astro)
          </a>
        </nav>
        <Outlet />
      </div>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
