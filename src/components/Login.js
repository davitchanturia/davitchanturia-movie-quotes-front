import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

import Input from './UI/form/Input';
import Spinner from '../components/UI/Spinner';
import apiClient from '../api/api';
import useAuthCheck from '../hooks/use-authCheck';

const Login = () => {
  const [notFound, setNotFound] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const checkAuth = useAuthCheck('login');
  const { isLoading, sendAuthRequest } = checkAuth;

  useEffect(() => {
    sendAuthRequest('api/logged-in');
  }, [sendAuthRequest]);

  const onSubmitHandler = (data, e) => {
    e.preventDefault();

    const inputData = {
      email: data.email,
      password: data.password,
    };

    if (inputData.email && inputData.password.length > 3) {
      (async () => {
        try {
          await apiClient.get('sanctum/csrf-cookie');
          const response = await apiClient.post('api/login', inputData);

          if (response.data === 404) {
            throw new Error('Your provided credentials was not found!');
          }

          if (response.data === 204) {
            navigate('/admin');
          }
        } catch (error) {
          setNotFound(error.message);
          // console.log(error.message);
        }
      })();
    }
  };

  if (isLoading) {
    return <Spinner color='admin' />;
  }

  return (
    <>
      <div className='h-screen flex justify-center items-center bg-slate-300'>
        <div className='flex-1 flex flex-col justify-center  px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className='mx-auto  w-full max-w-sm lg:w-96'>
            <div>
              <h2 className=' text-3xl font-extrabold text-slate-900'>
                Sign in to your account
              </h2>
            </div>

            <div className='mt-8'>
              <div className='mt-6'>
                <form
                  onSubmit={handleSubmit(onSubmitHandler)}
                  method='POST'
                  className='space-y-6'
                >
                  <Input
                    register={register('email', {
                      required: 'This filed is required',
                    })}
                    title='Email address'
                    type='email'
                    error={errors.email?.message}
                  />
                  <Input
                    register={register('password', {
                      required: 'This filed is required',
                      minLength: {
                        value: 4,
                        message: 'Password has to be more than 4 characters',
                      },
                    })}
                    title='Password'
                    type='password'
                    error={errors.password?.message}
                  />
                  <p
                    className='text-red-500 text-sm'
                    style={{ marginBlockStart: 0, marginBlockEnd: 0 }}
                  >
                    {notFound}
                  </p>

                  <div>
                    <button
                      type='submit'
                      className='w-full flex justify-center py-2 px-4  border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all'
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
