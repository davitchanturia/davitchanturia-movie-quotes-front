import Input from './UI/form/Input';

const Login = () => {
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
                <form action='#' method='POST' className='space-y-6'>
                  <Input title='Email address' type='email' />

                  <Input title='Password' type='password' />

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
