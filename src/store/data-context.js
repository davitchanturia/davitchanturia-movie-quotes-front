import React, { useState } from 'react';

const DataContext = React.createContext({
  movie: {},
  onGetData: () => {},
  allData: {},
  onAllData: () => {},
});

export const DataContextProvider = (props) => {
  const [movie, setMovie] = useState({});
  const [allData, setAllData] = useState({});

  const getDataHandler = (data) => {
    setMovie(data);
  };

  const fetchAllDataHandler = (data) => {
    setAllData(data);
  };

  return (
    <DataContext.Provider
      value={{
        movie: movie,
        onGetData: getDataHandler,
        allData: allData,
        onAllData: fetchAllDataHandler,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
