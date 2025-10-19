import handler from '@tanstack/react-start/server-entry'

export function ALL({ params, request }: any) {
    return handler.fetch(request)
}
