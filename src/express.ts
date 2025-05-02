import express from 'express';
import { statefulHandlers } from 'express-mcp-handler';
import { ServerFactory } from './types';
import { candidateConfig } from './config';
import path from 'path';
import fs from 'fs';
import nunjucks from 'nunjucks';
import { v4 as uuidv4 } from 'uuid';

// TODO: add well known for mcp
// TODO: maybe add an a2a card?
function startHTTPServer(serverFactory: ServerFactory, port: number) {
  const app = express();
  app.use(express.json());
  app.use(express.static(path.join(process.cwd(), 'public')));

  // Configure Nunjucks as the template engine
  nunjucks.configure(path.join(process.cwd(), 'views'), {
    autoescape: true,
    express: app,
    watch: process.env.NODE_ENV !== 'production',
  });
  // Register .njk extension with Express
  app.engine('njk', nunjucks.render);
  app.set('view engine', 'njk');
  app.set('views', path.join(process.cwd(), 'views'));

  app.get('/', (req, res) => {
    // Render the Nunjucks template with candidateConfig data
    res.render('index', {
      name: candidateConfig.name || 'Jake Gaylor',
      resumeUrl: candidateConfig.resumeUrl || '',
      linkedinUrl: candidateConfig.linkedinUrl || '',
      githubUrl: candidateConfig.githubUrl || '',
      websiteUrl: candidateConfig.websiteUrl || '',
      resumeText: candidateConfig.resumeText || '',
      websiteText: candidateConfig.websiteText || ''
    });
  });

  app.get('/llms.txt', (req, res) => {
    const llmsPath = path.join(process.cwd(), 'public', 'llms.txt');
    const llmsContent = fs.readFileSync(llmsPath, 'utf8');
    res.setHeader('Content-Type', 'text/plain');
    res.send(llmsContent);
  });

  const handlers = statefulHandlers(serverFactory, {
    sessionIdGenerator: () => {
      return uuidv4();
    }
  });
  app.post('/mcp', handlers.postHandler);
  app.get('/mcp', handlers.getHandler);
  app.delete('/mcp', handlers.deleteHandler);

  // Start the server
  app.listen(port, () => {
    console.log(`Stateless MCP server running on port ${port}`);
  });
}

export { startHTTPServer };