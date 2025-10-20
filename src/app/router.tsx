// import { createRouter } from '@tanstack/react-router'
import { createRouter } from '@tanstack/solid-router'
import { routeTree } from './routeTree.gen'

export const getRouter = () => {
  return createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  })
}

declare module '@tanstack/solid-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
