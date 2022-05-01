import { Express, Request, Response } from 'express';
import validateResource from '../middleware/validateResource';
import requireUser from '../middleware/requireUser';
import { createUserSchema } from '../schema/user.schema';
import { createSessionSchema } from '../schema/session.schema';
import {
  createProductSchema,
  getProductSchema,
  updateProductSchema,
  deleteProductSchema,
} from '../schema/product.schema';
import { createUserHandler } from '../controller/user.controller';
import {
  createUserSessionHandler,
  getUserSessionsHandler,
  deleteSessionHandler,
} from '../controller/session.controller';
import {
  createProductHandler,
  getProductHandler,
  updateProductHandler,
  deleteProductHandler,
} from '../controller/product.controller';

function routes(app: Express) {
  app.get('/check', (req: Request, res: Response) => res.sendStatus(200));

  app.post('/api/users', validateResource(createUserSchema), createUserHandler);

  app.post(
    '/api/sessions',
    validateResource(createSessionSchema),
    createUserSessionHandler
  );

  app.get('/api/sessions', requireUser, getUserSessionsHandler);

  app.delete('/api/sessions', requireUser, deleteSessionHandler);

  app.post(
    '/api/products',
    [requireUser, validateResource(createProductSchema)],
    createProductHandler
  );

  app.get(
    '/api/products/:productId',
    validateResource(getProductSchema),
    getProductHandler
  );

  app.put(
    '/api/products/:productId',
    [requireUser, validateResource(updateProductSchema)],
    updateProductHandler
  );

  app.delete(
    '/api/products/:productId',
    [requireUser, validateResource(deleteProductSchema)],
    deleteProductHandler
  );
}

export default routes;
