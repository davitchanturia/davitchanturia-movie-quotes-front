import React, { useState } from 'react';

const ModalContext = React.createContext({
  isOpen: false,
  onChangeActivePage: () => {},
});

export const ModalContextProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeOpenStatusHandler = (status) => {
    setIsOpen(status);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen: isOpen,
        onChangeActivePage: changeOpenStatusHandler,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
