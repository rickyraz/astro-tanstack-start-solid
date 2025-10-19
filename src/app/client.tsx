import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { getRouter } from './router'

const router = getRouter()

const rootElement = document.getElementById('app')!

hydrateRoot(
  rootElement,
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
