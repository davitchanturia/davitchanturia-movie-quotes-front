import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import apiClient from '../api/api';
import Data from '../components/admin/Data';
import Navbar from '../components/admin/Navbar';
import SideBar from '../components/admin/SideBar';
import Spinner from '../components/UI/Spinner';
import DataContext from '../store/data-context';

const AdminPanel = () => {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const dataCtx = useContext(DataContext);

  useEffect(() => {
    (async () => {
      try {
        await apiClient.get('sanctum/csrf-cookie');
        const response = await apiClient.get('api/all-data');

        dataCtx.onAllData(response.data);
        setIsLoading(false);
      } catch (error) {
        if (error.response.status === 401) {
          navigate('/login');
        }
        if (error.response.status === 429) {
          navigate('/');
        }
      }
    })();
  }, [navigate]);

  if (isLoading) {
    return <Spinner color='admin' />;
  }

  return (
    <div className='w-full h-screen bg-gray-100'>
      <Navbar />
      <div className='flex'>
        <SideBar />
        <Data />
      </div>
    </div>
  );
};

export default AdminPanel;
