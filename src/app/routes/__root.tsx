import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-4">The page you are looking for does not exist.</p>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Go back to home
        </Link>
      </div>
    )
  },
})

function RootComponent() {
  return (
    <>
      <div className="p-4">
        <nav className="flex gap-4 mb-4 border-b pb-4">
          <Link
            to="/ini"
            className="text-blue-600 hover:text-blue-800 [&.active]:font-bold"
          >
            ini
          </Link>
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-800 [&.active]:font-bold"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-blue-600 hover:text-blue-800 [&.active]:font-bold"
          >
            About
          </Link>
          <a
            href="/blog"
            className="text-blue-600 hover:text-blue-800"
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
