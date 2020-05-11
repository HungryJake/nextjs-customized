const express = require('express');
const nextRoutes = require('next-routes');
const next = require('next');
const compression = require('compression');
const helmet = require('helmet');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const routes = nextRoutes();
Object.entries(require('../config/app-routes.json')).forEach(([pathname, route]) =>
  routes.add(route)
);
const reqHandler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server.use(helmet());
  server.use(express.json());
  server.use(compression());

  // public  APIs
  const apiRouter = require('./api/api');
  server.use(apiRouter);

  server.get('*', (req, res) => {
    return reqHandler(req, res);
  });

  const PORT = process.env.NODE_PORT || 3000;

  server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
