import handler from '@tanstack/solid-start/server-entry'

export function ALL({ params, request }: any) {
    return handler.fetch(request)
}
