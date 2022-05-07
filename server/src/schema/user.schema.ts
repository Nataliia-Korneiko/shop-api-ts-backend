import { object, string, TypeOf } from 'zod'; // validation

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserInput:
 *      type: object
 *      required:
 *        - name
 *        - email
 *        - password
 *        - passwordConfirmation
 *      properties:
 *        name:
 *          type: string
 *          default: Matt Parry
 *        email:
 *          type: string
 *          default: matt.parry@example.com
 *        password:
 *          type: string
 *          default: 12345678
 *        passwordConfirmation:
 *          type: string
 *          default: 12345678
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        name:
 *          type: string
 *        email:
 *          type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 */

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required',
    }),

    email: string({
      required_error: 'Email is required',
    }).email('Not a valid email'),

    password: string({
      required_error: 'Password is required',
    }).min(6, 'Password too short - should be 6 chars minimum'),

    passwordConfirmation: string({
      required_error: 'passwordConfirmation is required',
    }),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation'],
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  'body.passwordConfirmation'
>;
