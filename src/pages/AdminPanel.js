import Navbar from '../components/admin/Navbar';
import SideBar from '../components/admin/SideBar';

const AdminPanel = () => {
  return (
    <div className='w-full h-screen bg-gray-100'>
      <Navbar />
      <SideBar />
    </div>
  );
};

export default AdminPanel;
