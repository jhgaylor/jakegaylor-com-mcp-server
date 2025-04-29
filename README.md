# HTTP Server with MCP Support

An HTTP server built with Express and TypeScript that serves both a webpage and a Model Context Protocol (MCP) endpoint.

## Features

- HTTP server with both web and MCP functionality
- Stateless MCP server implementation with modern Streamable HTTP transport
- TypeScript for type safety
- Express.js for HTTP handling

## Requirements

- Node.js 18+ 
- npm or yarn

## Installation

```bash
# Clone the repository (or download)
git clone https://github.com/your-username/jakegaylor-com-mcp-server.git
cd jakegaylor-com-mcp-server

# Install dependencies
npm install
```

## Development

```bash
# Build the TypeScript code
npm run build

# Run in development mode with auto-reloading
npm run dev

# Run tests (when added)
npm test
```

## Server Structure

```
src/
  ├── index.ts                # Main application entry point
  ├── express.ts              # HTTP server configuration
  ├── stdio.ts                # STDIO server configuration
  ├── config.ts               # Server configuration
  └── types.ts                # TypeScript type definitions
```

## Available Endpoints

The server supports multiple endpoints:

- **Web (GET `/`)**: Serves a webpage
- **MCP (POST `/mcp`)**: Provides MCP protocol functionality

### MCP Functionality

The MCP endpoint implements three MCP components:

- **Resource**: `echo://{message}` - Returns the message as a resource
- **Tool**: `echo` - Echoes the provided message back as a tool response
- **Prompt**: `echo` - Creates a user prompt with the provided message

## MCP Protocol

This server implements the [Model Context Protocol](https://modelcontextprotocol.io/) (MCP), a standardized way for LLMs to interact with external data and functionality. It exposes a stateless API endpoint that responds to JSON-RPC requests.

### API Usage

Send a POST request to `/mcp` with a JSON-RPC payload:


#### Initialize

```bash
curl -X POST http://localhost:3000/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -H "Accept: text/event-stream" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "initialize",
    "params": {
      "protocolVersion": "2024-11-05",
      "capabilities": {
        "roots": {
          "listChanged": true
        },
        "sampling": {}
      },
      "clientInfo": {
        "name": "ExampleClient",
        "version": "1.0.0"
      }
    }
  }'
```

#### Call Echo Tool

```bash
curl -X POST http://localhost:3000/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -H "Accept: text/event-stream" \
  -d '{
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "echo",
      "arguments": {
        "message": "Hello, World!"
      }
    },
    "id": 1
  }'
```

## License

[ISC](LICENSE) 

## Regenerating the fly deploy key

The token was made with:

`fly tokens create deploy --name gh-jakegaylor-com-mcp-server --expiry 2160h`