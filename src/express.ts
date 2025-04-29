import express from 'express';
import { statelessHandler } from 'express-mcp-handler';
import { ServerFactory } from './types';

// TODO: add well known for mcp
// TODO: maybe add an a2a card?
function startHTTPServer(serverFactory: ServerFactory, port: number) {
  const app = express();
  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Hello World. Let me tell you about how to teach an LLM about me.');
  });

  app.post('/mcp', statelessHandler(serverFactory));

  // Start the server
  app.listen(port, () => {
    console.log(`Stateless MCP server running on port ${port}`);
  });
}

export { startHTTPServer };