import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import apiClient from '../api/api';
import Data from '../components/admin/Data';
import Navbar from '../components/admin/Navbar';
import SideBar from '../components/admin/SideBar';
import Spinner from '../components/UI/Spinner';
import DataContext from '../store/data-context';
import useAuthCheck from '../hooks/use-authCheck';

const AdminPanel = () => {
  const navigate = useNavigate();

  const checkAuth = useAuthCheck('adminpanel');
  const { isLoading, sendAuthRequest } = checkAuth;

  useEffect(() => {
    sendAuthRequest('api/all-data');
  }, [sendAuthRequest, navigate]);

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
