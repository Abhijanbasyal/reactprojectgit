// Profile.jsx

import React from 'react';

export const Profile = ({ username }) => {
  return (
    <div className="flex justify-center items-center mt-12 ml-64 w-auto">
      <div className="bg-white p-8 rounded shadow-md w-full h-full mb-80">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        <p className="text-4xl font-bold mb-8">{username}</p>
        {/* Other profile information */}
      </div>
    </div>
  );
};


