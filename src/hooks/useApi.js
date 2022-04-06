import { useTranslation } from 'react-i18next';
import apiClient from 'api/api';
import { useNavigate } from 'react-router';

import { useCallback, useState, useContext } from 'react';
import DataContext from 'store/dataContext';

const useApi = (type) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const dataCtx = useContext(DataContext);

  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const sendRequest = useCallback(
    async (path) => {
      try {
        setIsLoading(true);

        if (type === 'getData') {
          const response = await apiClient.get(path);

          dataCtx.onGetData(response.data);
        }
        if (type === 'adminpanel') {
          await apiClient.get('sanctum/csrf-cookie');
          const response = await apiClient.get(path);

          dataCtx.onAllData(response.data);
        }
        setIsLoading(false);
      } catch (error) {
        if (error.response.status === 500) {
          setError('Something went wrong, try another time!');
          setIsLoading(false);
        }
        if (error.response.status === 401) {
          if (type === 'adminpanel') {
            navigate('/login');
          } else {
            setIsLoading(false);
          }
        }
        if (error.response.status === 403) {
          setError(error.response.data.message);
          setIsLoading(false);
        }
        if (error.response.status === 429) {
          navigate('/');
        }
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
