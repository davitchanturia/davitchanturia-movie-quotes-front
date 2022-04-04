import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Data from 'pages/Admin/components/Data';
import Navbar from 'pages/Admin/components/Navbar';
import SideBar from 'pages/Admin/components/SideBar';
import Spinner from 'components/UI/Spinner';
import useApi from 'hooks/use-api';

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
    <div className='w-full min-h-screen h-full bg-gray-100 '>
      <Navbar />
      <div className='flex flex-col lg:flex-row p-5 justify-center'>
        <SideBar />
        <Data />
      </div>
    </div>
  );
};

export default AdminPanel;
