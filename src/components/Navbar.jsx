import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar = ({ loggedInUser, onLogout }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const goToProfile = () => {
    navigate('/profile');
    setDropdownVisible(false);
  };

  const handleLogout = () => {
    onLogout();
    setDropdownVisible(false);
    navigate('/');
  };

  return (
    <nav>
      <div className='bg-teal-800 h-36'>
        <div className='float-left h-32 pt-7 pl-10 '>
          <h1 className='text-8xl font-bold text-yellow-600'>TASK</h1>
        </div>

        <div className="float-right my-14 mr-12 py-6">
          <ul className='flex justify-between items-center'>
            <NavLink to="/" className="text-white">
              <li className='font-bold text-2xl hover:bg-teal-500 p-4'>Home</li>
            </NavLink>
            <NavLink to="/about" className="text-white">
              <li className='font-bold text-2xl hover:bg-teal-500 p-4'>About</li>
            </NavLink>
            <NavLink to="/blog" className="text-white">
              <li className='font-bold text-2xl hover:bg-teal-500 p-4'>Blog</li>
            </NavLink>
            <NavLink to="/contact" className="text-white">
              <li className='font-bold text-2xl hover:bg-teal-500 p-4'>Contact</li>
            </NavLink>
            {loggedInUser ? (
              <div className="relative">
                <button className="text-white focus:outline-none" onClick={toggleDropdown}>
                  {loggedInUser}
                </button>
                {dropdownVisible && (
                  <div className="absolute right-0 mt-2 bg-white p-2 rounded-md shadow-md">
                    <button className="block text-gray-800 hover:bg-green-300 py-1 px-2 rounded" onClick={goToProfile}>
                      Profile
                    </button>
                    <button className="block text-gray-800 hover:bg-green-300 py-1 px-2 rounded" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <NavLink to="/signup" className="text-white">
                  <li className='font-bold text-2xl hover:bg-teal-500 p-4'>Signup</li>
                </NavLink>
                <NavLink to="/login" className="text-white">
                  <li className='font-bold text-2xl hover:bg-teal-500 p-4'>Login</li>
                </NavLink>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
