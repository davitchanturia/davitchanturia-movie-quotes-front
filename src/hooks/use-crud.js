import apiClient from '../api/api';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';
import { useContext } from 'react';
import AdminContext from '../store/admin-context';
import ModalContext from '../store/modal-context';

const useCrud = (isLogout) => {
  const navigate = useNavigate();

  const adminCtx = useContext(AdminContext);
  const modalCtx = useContext(ModalContext);

  const actionRequest = useCallback(
    async (path, data) => {
      try {
        const response = await apiClient.post(path, data);

        if (isLogout === 'logout') {
          if (response.data === 200) {
            navigate('/login');
          }
          adminCtx.onChangeActivePage('Home');
        } else {
          if (response.data === 200) {
            modalCtx.onChangeMovieCreate(false);
            modalCtx.onChangeQuoteCreate(false);
            navigate('/admin');
          }
        }
      } catch (error) {
        // console.log(error.message);
      }
    },
    [navigate, isLogout]
  );

  const deleteRequest = useCallback(
    (path) => {
      (async () => {
        try {
          const response = await apiClient.delete(path);

          console.log(response);

          if (response.data === 200) {
            navigate('/admin');
            modalCtx.onChangeDelete(false);
          }
        } catch (error) {
          // console.log(error.message);
        }
      })();
    },
    [navigate]
  );

  return { actionRequest, deleteRequest };
};

export default useCrud;
