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
  isOpenEditMovie: false,
  onChangeMovieEdit: (status) => {},
  isOpenEditQuote: false,
  onChangeQuoteEdit: (status) => {},
});

export const ModalContextProvider = (props) => {
  const [isOpenLogout, setIsOpenLogout] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpenCreateMovie, setIsOpenCreateMovie] = useState(false);
  const [isOpenCreateQuote, setIsOpenCreateQuote] = useState(false);
  const [isOpenEditMovie, setIsOpenEditMovie] = useState(false);
  const [isOpenEditQuote, setIsOpenEditQuote] = useState(false);

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

  const changeEditMovieStatusHandler = (status) => {
    setIsOpenEditMovie(status);
  };

  const changeEditQuoteStatusHandler = (status) => {
    setIsOpenEditQuote(status);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpenLogout: isOpenLogout,
        isOpenDelete: isOpenDelete,
        isOpenCreateMovie: isOpenCreateMovie,
        isOpenCreateQuote: isOpenCreateQuote,
        isOpenEditMovie: isOpenEditMovie,
        isOpenEditQuote: isOpenEditQuote,
        onChangeLogout: changeLogoutStatusHandler,
        onChangeDelete: changeDeleteStatusHandler,
        onChangeMovieCreate: changeCreateMovieStatusHandler,
        onChangeQuoteCreate: changeCreateQuoteStatusHandler,
        onChangeMovieEdit: changeEditMovieStatusHandler,
        onChangeQuoteEdit: changeEditQuoteStatusHandler,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
