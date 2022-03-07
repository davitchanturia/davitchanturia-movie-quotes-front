import React, { useState } from 'react';

const AdminContext = React.createContext({
  active: 'Home',
  onChangeActivePage: () => {},
  isLoggedIn: false,
  onLoggIn: () => {},
});

export const AdminContextProvider = (props) => {
  const [activePage, setActivePage] = useState('Home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const changeActivePageHandler = (page) => {
    setActivePage(page);
  };

  const logInHandler = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <AdminContext.Provider
      value={{
        active: activePage,
        onChangeActivePage: changeActivePageHandler,
        isLoggedIn: isLoggedIn,
        onLoggIn: logInHandler,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContext;
