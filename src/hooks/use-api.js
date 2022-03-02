import axios from 'axios';
import { useTranslation } from 'react-i18next';

import { useCallback, useState, useContext } from 'react';
import DataContext from '../store/data-context';

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const dataCtx = useContext(DataContext);

  const { t, i18n } = useTranslation();

  const sendRequest = useCallback(
    async (file) => {
      if (file === 'getData') {
        setIsLoading(true);
        await axios
          .get('http://127.0.0.1:8000/api/random-movie')
          .then(function (response) {
            if (!response.data) {
              throw new Error('Something went wrong');
            }
            console.log(response.data);
            dataCtx.onGetData(response.data);
            setIsLoading(false);
            i18n.changeLanguage('en');
          })
          .catch(function (error) {
            setError(error.message);
            setIsLoading(false);
          });
      }
    },
    [i18n]
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useApi;
