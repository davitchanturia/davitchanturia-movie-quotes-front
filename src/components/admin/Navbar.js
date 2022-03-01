const Navbar = () => {
  return (
    <nav className='flex-shrink-0 bg-slate-900'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-4 lg:py-2'>
        <div className='relative flex items-center justify-between flex-col sm:flex-row h-16'>
          <div className='flex items-center px-2 lg:px-0 xl:w-64'>
            <div className='flex-shrink-0'>
              <h1 className='h-8 w-auto text-white text-xl'>Movie Quotes</h1>
            </div>
          </div>

          <div className='block lg:w-80'>
            <div className='flex items-center justify-end'>
              <div className='flex'>
                <h1 className='px-3 py-2 rounded-md text-md font-medium text-indigo-200 hover:text-white'>
                  Logged in: dato
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
