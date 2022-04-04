import React, { useState } from 'react';

const ModalContext = React.createContext({
  isOpenLogout: false,
  onChangeLogout: (status) => {},
  isOpenDelete: false,
  onChangeDelete: (status) => {},
  isOpenCreateMovie: false,
  onChangeMovieCreate: (status) => {},
  isOpenCreateQuote: false,
  onChangeQuoteCreate: (status) => {},
});

export const ModalContextProvider = (props) => {
  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenCreateMovie, setIsOpenCreateMovie] = useState(false);
  const [isOpenCreateQuote, setIsOpenCreateQuote] = useState(false);

  const changeLogoutStatusHandler = (status) => {
    setIsOpenLogout(status);
  };

  const changeDeleteStatusHandler = (status) => {
    setIsOpenDelete(status);
  };

  const changeCreateMovieStatusHandler = (status) => {
    setIsOpenCreateMovie(status);
  };

  const changeCreateQuoteStatusHandler = (status) => {
    setIsOpenCreateQuote(status);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpenLogout: isOpenLogout,
        isOpenDelete: isOpenDelete,
        isOpenCreateMovie: isOpenCreateMovie,
        isOpenCreateQuote: isOpenCreateQuote,
        onChangeLogout: changeLogoutStatusHandler,
        onChangeDelete: changeDeleteStatusHandler,
        onChangeMovieCreate: changeCreateMovieStatusHandler,
        onChangeQuoteCreate: changeCreateQuoteStatusHandler,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
