import React, { useState } from 'react';

const AdminContext = React.createContext({
  active: 'Home',
  onChangeActivePage: () => {},
});

export const AdminContextProvider = (props) => {
  const [activePage, setActivePage] = useState('Home');

  const changeActivePageHandler = (page) => {
    setActivePage(page);
  };

  return (
    <AdminContext.Provider
      value={{
        active: activePage,
        onChangeActivePage: changeActivePageHandler,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContext;
