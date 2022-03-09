import { useCallback, useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import apiClient from '../api/api';
import DataContext from '../store/data-context';

const useAuthCheck = (type) => {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const dataCtx = useContext(DataContext);

  const sendAuthRequest = useCallback(async (path) => {
    try {
      await apiClient.get('sanctum/csrf-cookie');
      const response = await apiClient.get(path);

      //extra operations for fetching all data
      if (type === 'adminpanel') {
        dataCtx.onAllData(response.data);
      }

      //extra operations for cecking auth status
      if (type === 'login') {
        if (response.data.isLoggedIn === 'true') {
          navigate('/admin');
        }
      }

      setIsLoading(false);
    } catch (error) {
      if (error.response.status === 401) {
        if (type === 'adminpanel') {
          navigate('/login');
        } else {
          setIsLoading(false);
        }
      }
      if (error.response.status === 429) {
        navigate('/');
      }
    }
  }, []);

  return {
    isLoading,
    sendAuthRequest,
  };
};

export default useAuthCheck;
