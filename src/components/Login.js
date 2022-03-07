import { useRef } from 'react';
import axios from 'axios';
import Input from './UI/form/Input';

const Login = () => {
  const email = useRef();
  const password = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post('http://127.0.0.1:8000/api/login', {
        email: email.current.value,
        password: password.current.value,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
                  onSubmit={onSubmitHandler}
                  method='POST'
                  className='space-y-6'
                >
                  <Input title='Email address' type='email' ref={email} />
                  {/* <input type='text' ref={text} /> */}
                  <Input title='Password' type='password' ref={password} />

                  <div>
                    <button
                      type='submit'
                      className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all'
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
