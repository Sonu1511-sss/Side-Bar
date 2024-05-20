import React, { useState } from 'react';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <aside id="sidebar-multi-level-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`} aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-200 dark:hover:bg-blue-200 group">
                <img className='h-[2rem]' src="https://connectshiksha.com/assets/mainlogo-BVXvkrYL.png" alt="Logo" />
                <span onClick={toggleSidebar} className="ms-3 text-[#ae1c9a] pl-[2rem] text-[2rem] text-blue-500">CS</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-blue-200 dark:text-white dark:hover:bg-gray-700">
                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap font-bold text-blue-500">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-blue-200 dark:text-white dark:hover:bg-gray-700">
                <span className='text-gray-500'><i className="fa-solid fa-chart-simple"></i></span>
                <span className="flex-1 ms-3 whitespace-nowrap font-bold text-blue-500 pl-[0.3rem]">Statistics</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-blue-200 dark:text-white dark:hover:bg-gray-700">
                <span className='text-gray-500'><i className="fa-solid fa-user"></i></span>
                <span className="flex-1 ms-3 whitespace-nowrap font-bold text-blue-500 pl-[0.3rem]">Users</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-blue-200 dark:text-white dark:hover:bg-gray-700">
                <span className='text-gray-500'><i className="fa-solid fa-boxes-stacked"></i></span>
                <span className="flex-1 ms-3 whitespace-nowrap font-bold text-blue-500">Inventory</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-blue-200 dark:text-white dark:hover:bg-gray-700">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap font-bold text-blue-500">Order</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-blue-200 dark:text-white dark:hover:bg-gray-700">
                <span className='text-gray-500'><i className="fa-solid fa-hand-holding-dollar"></i></span>
                <span className="flex-1 ms-3 whitespace-nowrap font-bold text-blue-500">Billings</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-blue-200 dark:text-white dark:hover:bg-gray-700">
                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap font-bold text-blue-500">Setting</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-blue-200 dark:text-white dark:hover:bg-gray-700">
                <span className='text-gray-500'><i className="fa-regular fa-circle-question"></i></span>
                <span className="flex-1 ms-3 whitespace-nowrap font-bold text-blue-500">Help</span>
              </a>
            </li>
          </ul>
          <div className='flex justify-start mt-[7rem] gap-[1rem] '>
            <div className='pt-[1rem]'>
              <span className='bg-blue-200 p-[0.6rem] rounded-lg font-semibold'>CS</span>
            </div>
            <div>
              <span className='text-gray-600 font-bold'>Connect Shiksha</span> <br />
              <span className='text-gray-600 font-bold text-[0.9rem]'>ConnectShik@gmail.com</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
