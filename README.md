# Astro + TanStack Start (Solid) Web API Bridge Template

This template is a starter for integrating **two ecosystems**:

1. **Astro** as the host app and SSR entrypoint.
2. **TanStack Start (Solid Router)** as the app layer for routing and UI.

Both are connected through a **Web API bridge** in `src/pages/[...slug].ts`, which forwards all requests to the TanStack Start server handler.

## How The Integration Works

Request flow:

1. A request enters the Astro server.
2. Astro catches it with the catch-all route in `src/pages/[...slug].ts`.
3. The `ALL()` function forwards the request to `handler.fetch(request)` from TanStack Start.
4. TanStack Start handles routing/data and returns the response to the client.

This approach lets you combine Astro's hosting/SSR capabilities with the TanStack Start ecosystem in a single project.

## Key Structure

```text
src/
  app/
    routes/              # TanStack Start (Solid) routes
    router.tsx           # TanStack router setup
    routeTree.gen.ts     # Generated route tree
  pages/
    [...slug].ts         # Astro -> TanStack Start Web API bridge
```

## Run The Project

```bash
bun install
bun dev
```

The app runs at `http://localhost:42322` (see `astro.config.ts`).

## Production Build

```bash
bun build
bun preview
```

## Main Stack

- Astro 5
- TanStack Start + Solid Router
- SolidJS
- Tailwind CSS 4
- Vite

## When To Use This Template

This template is a good fit when you want to:

- use Astro as the host/server framework,
- keep TanStack Start's routing and app runtime patterns,
- build a cross-ecosystem architecture with a simple Web API integration layer.
