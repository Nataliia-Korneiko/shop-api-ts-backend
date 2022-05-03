import express from 'express';
import config from 'config';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import deserializeUser from '../middleware/deserializeUser';
import routes from '../routes/routes';

function createServer() {
  const app = express();

  app.use(
    cors({
      origin: config.get('origin'),
      credentials: true,
    })
  );

  app.use(cookieParser());
  app.use(express.json());
  app.use(deserializeUser);

  routes(app);
  return app;
}

export default createServer;
