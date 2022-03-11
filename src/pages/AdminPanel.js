import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Data from '../components/admin/Data';
import Navbar from '../components/admin/Navbar';
import SideBar from '../components/admin/SideBar';
import Spinner from '../components/UI/Spinner';
import useApi from '../hooks/use-api';

const AdminPanel = () => {
  const navigate = useNavigate();

  const httpData = useApi('adminpanel');
  const { isLoading, sendRequest } = httpData;

  useEffect(() => {
    sendRequest('api/all-data');
  }, [sendRequest, navigate]);

  if (isLoading) {
    return <Spinner color='admin' />;
  }

  return (
    <div className='w-full h-screen bg-gray-100'>
      <Navbar />
      <div className='flex h-full'>
        <SideBar />
        <Data />
      </div>
    </div>
  );
};

export default AdminPanel;
