import { useCallback, useState } from 'react';
import apiClient from 'api/api';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import AdminContext from 'store/adminContext';
import ModalContext from 'store/modalContext';
import useApi from 'hooks/useApi';

const useCrud = (isLogout) => {
  const [backError, setBackError] = useState(null);

  const navigate = useNavigate();

  const httpData = useApi('adminpanel');
  const { sendRequest } = httpData;

  const adminCtx = useContext(AdminContext);
  const modalCtx = useContext(ModalContext);

  const actionRequest = useCallback(
    async (path, data) => {
      try {
        const response = await apiClient.post(path, data);

        if (response.data.status === '409') {
          throw new Error(response.data.message);
        }

        if (isLogout === 'logout') {
          if (response.data === 200) {
            navigate('/login');
          }

          adminCtx.onChangeActivePage('Home');
          modalCtx.onChangeLogout(false);
        } else {
          if (response.data === 200) {
            modalCtx.onChangeMovieCreate(false);
            modalCtx.onChangeQuoteCreate(false);

            sendRequest('api/all-data');
            navigate('/admin');
          }
        }
      } catch (error) {
        setBackError(error.message);
        setTimeout(() => {
          setBackError(null);
        }, 3000);
      }
    },
    [navigate, isLogout]
  );

  const deleteRequest = useCallback(
    (path) => {
      (async () => {
        try {
          const response = await apiClient.delete(path);

          if (response.data === 200) {
            navigate('/admin');
            modalCtx.onChangeDelete(false);
            sendRequest('api/all-data');
          }
        } catch (error) {}
      })();
    },
    [navigate]
  );

  return { actionRequest, deleteRequest, backError };
};

export default useCrud;
