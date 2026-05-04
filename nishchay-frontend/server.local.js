// Local dev server — mimics Vercel serverless functions
// Run with: node server.local.js
// Proxied via Vite on /api/waitlist

import dotenv from 'dotenv';
import http from 'http';

// Load .env.local BEFORE importing db.js (which reads MONGO_URI at module init)
dotenv.config({ path: '.env.local' });

const { default: waitlistHandler } = await import('./api/waitlist.js');

const PORT = 3001;

const server = http.createServer((req, res) => {
  // CORS headers for local dev
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === '/api/waitlist') {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      try {
        req.body = body ? JSON.parse(body) : {};
      } catch {
        req.body = {};
      }

      // Wrap res to match Vercel's response API
      res.status = (code) => { res.statusCode = code; return res; };
      res.json = (data) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
      };

      waitlistHandler(req, res);
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`\nLocal API server running at http://localhost:${PORT}`);
  console.log(`  POST http://localhost:${PORT}/api/waitlist\n`);
});
