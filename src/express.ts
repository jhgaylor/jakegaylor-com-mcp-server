import express from 'express';
import { statelessHandler } from 'express-mcp-handler';
import { ServerFactory } from './types';
import path from 'path';
import fs from 'fs';

// TODO: add well known for mcp
// TODO: maybe add an a2a card?
function startHTTPServer(serverFactory: ServerFactory, port: number) {
  const app = express();
  app.use(express.json());
  app.use(express.static(path.join(process.cwd(), 'public')));

  app.get('/', (req, res) => {
    const indexPath = path.join(process.cwd(), 'public', 'index.html');
    const indexHtml = fs.readFileSync(indexPath, 'utf8');
    res.send(indexHtml);
  });

  app.post('/mcp', statelessHandler(serverFactory));

  // Start the server
  app.listen(port, () => {
    console.log(`Stateless MCP server running on port ${port}`);
  });
}

export { startHTTPServer };