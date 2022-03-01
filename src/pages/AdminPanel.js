import Home from '../components/admin/content/Home';
import Navbar from '../components/admin/Navbar';
import SideBar from '../components/admin/SideBar';

const AdminPanel = () => {
  return (
    <div className='w-full h-screen bg-gray-100'>
      <Navbar />
      <div className='flex'>
        <SideBar />
        <div className='bg-green-900 w-5/6 mr-20 p-7'>
          <Home />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
