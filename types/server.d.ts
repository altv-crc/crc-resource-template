// These allow for cross-resource event names to populate

declare module 'alt-server' {
    interface ICustomEmitEvent {
        // 'alt.on-emit-example': (data: string, value: number) => void;
    }
}

declare module 'alt-shared' {
    interface ICustomServerClientEvent {
        // 'alt.emitClient-example': (data: string, value: number) => void;
    }
}
