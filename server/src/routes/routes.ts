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
import {
  createUserHandler,
  getCurrentUser,
} from '../controller/user.controller';
import {
  createUserSessionHandler,
  getUserSessionsHandler,
  deleteSessionHandler,
  googleOauthHandler,
} from '../controller/session.controller';
import {
  createProductHandler,
  getProductHandler,
  updateProductHandler,
  deleteProductHandler,
} from '../controller/product.controller';

function routes(app: Express) {
  /**
   * @openapi
   * /check:
   *  get:
   *     tags:
   *     - Check
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  app.get('/check', (req: Request, res: Response) => res.sendStatus(200));

  /**
   * @openapi
   * '/api/users':
   *  post:
   *     tags:
   *     - User
   *     summary: Register a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
  app.post('/api/users', validateResource(createUserSchema), createUserHandler);

  app.get('/api/me', requireUser, getCurrentUser);

  app.post(
    '/api/sessions',
    validateResource(createSessionSchema),
    createUserSessionHandler
  );

  app.get('/api/sessions', requireUser, getUserSessionsHandler);

  app.delete('/api/sessions', requireUser, deleteSessionHandler);

  app.get('/api/sessions/oauth/google', googleOauthHandler);

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

  /**
   * @openapi
   * '/api/products/{productId}':
   *  get:
   *     tags:
   *     - Products
   *     summary: Get a single product by the productId
   *     parameters:
   *      - name: productId
   *        in: path
   *        description: The id of the product
   *        required: true
   *     responses:
   *       200:
   *         description: Success
   *         content:
   *          application/json:
   *           schema:
   *              $ref: '#/components/schema/Product'
   *       404:
   *         description: Product not found
   */
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
