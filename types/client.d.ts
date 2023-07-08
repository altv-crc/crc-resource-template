// These allow for cross-resource event names to populate

declare module 'alt-client' {
    interface ICustomEmitEvent {
        // 'alt.on-emit-example': (data: string, value: number) => void;
    }
}

declare module 'alt-shared' {
    interface ICustomClientServerEvent {
        // 'alt.emitServer-example': (data: string, value: number) => void;
    }
}
