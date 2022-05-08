import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

const createSessionSchema = object({
  email: string().nonempty({
    message: 'Email is required',
  }),
  password: string().nonempty({
    message: 'Password is required',
  }),
});

type CreateSessionInput = TypeOf<typeof createSessionSchema>;

function LoginPage() {
  const router = useRouter();
  const { loginError, setLoginError } = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateSessionInput>({
    resolver: zodResolver(createSessionSchema),
  });

  async function onSubmit(values: CreateSessionInput) {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/sessions`,
        values,
        { withCredentials: true }
      );

      router.push('/');
    } catch (error: any) {
      setLoginError(error.message);
    }
  }

  console.log({ errors });

  return (
    <>
      <p>{loginError}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-element'>
          <label htmlFor='email'>Email:</label>
          <input
            id='email'
            type='email'
            placeholder='Enter your email'
            {...register('email')}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div className='form-element'>
          <label htmlFor='password'>Password:</label>
          <input
            id='password'
            type='password'
            placeholder='**********'
            {...register('password')}
          />
          <p>{errors.password?.message}</p>
        </div>

        <button type='submit'>SUBMIT</button>
      </form>
    </>
  );
}

export default LoginPage;
