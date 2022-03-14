import { useCallback, useState } from 'react';
import apiClient from '../api/api';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import AdminContext from '../store/admin-context';
import ModalContext from '../store/modal-context';
import useApi from '../hooks/use-api';

const useCrud = (isLogout) => {
  const [backError, setBackError] = useState(null);
  const navigate = useNavigate();

  const httpData = useApi('adminpanel');
  const { isLoading, sendRequest } = httpData;

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
        } else {
          if (response.data === 200) {
            modalCtx.onChangeMovieCreate(false);
            modalCtx.onChangeQuoteCreate(false);

            // for update data in adminpanel
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
            // for update data in adminpanel
            sendRequest('api/all-data');
          }
        } catch (error) {
          // console.log(error.message);
        }
      })();
    },
    [navigate]
  );

  return { actionRequest, deleteRequest, backError };
};

export default useCrud;
