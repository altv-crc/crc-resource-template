# [CRC][TS] Resource Template

<sup>Supported by <a href="https://github.com/orgs/altv-crc/">CRC</a></sup>

This is a resource template to get started with writing your own plugin for the Cross Resource Community

## Folder Structure

```ts
// Where to write your client-side code
client/
    index.ts

// Where to write your server-side code
server/
    index.ts

// Define types for alt.emit, alt.on, alt.onServer, etc.
// Examples provided inside
types/
    client.d.ts
    server.d.ts

// Default resource configuration file
resource.toml
```