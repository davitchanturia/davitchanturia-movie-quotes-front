import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import apiClient from 'api/api';

const useAuthCheck = (type) => {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const sendAuthRequest = useCallback(async (path) => {
    try {
      await apiClient.get('sanctum/csrf-cookie');
      const response = await apiClient.get(path);

      if (response.data.isLoggedIn === 'true') {
        navigate('/admin');
      }

      setIsLoading(false);
    } catch (error) {
      if (error.response.status === 401) {
        setIsLoading(false);
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
