import { useState } from 'react';
import Element from './side/Element';

const SideBar = () => {
  const [activeEl, setActiveEl] = useState('Home');

  const focusChangeHandler = (currentElement) => {
    setActiveEl(currentElement);
  };

  return (
    <div className='w-60 ml-12 pt-2'>
      <nav
        className='mt-5 flex-shrink-0 h-full divide-y  overflow-y-auto'
        aria-label='Sidebar'
      >
        <div className='px-2 space-y-1'>
          <Element
            active={activeEl}
            onFocus={focusChangeHandler}
            title='Home'
            address='/'
            svgPath='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
          />

          <Element
            active={activeEl}
            onFocus={focusChangeHandler}
            title='Create'
            address='/admin/create'
            svgPath='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
          />

          <Element
            active={activeEl}
            onFocus={focusChangeHandler}
            title='View'
            address='admin/view'
            svgPath='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
          />
        </div>
        <div className='mt-12 pt-6'>
          <div className='px-2 space-y-1'>
            <Element
              title='Log out'
              svgPath='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
