import React, { useState } from 'react';

const DataContext = React.createContext({
  movie: {},
  onGetData: () => {},
});

export const DataContextProvider = (props) => {
  const [movie, setMovie] = useState({});

  const getDataHandler = (data) => {
    setMovie(data);
  };
  return (
    <DataContext.Provider
      value={{
        movie: movie,
        onGetData: getDataHandler,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
