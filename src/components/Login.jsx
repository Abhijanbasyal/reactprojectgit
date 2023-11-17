import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Login = ({ onLogin }) => {
  const [id, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!id || !password) {
      alert('Please enter a username and password');
      return;
    }
    try {
      // Fetch user data based on the entered username (id)
      const response = await fetch(`http://localhost:8000/users?username=${id}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const userData = await response.json();

      // Check if the entered password matches the stored password
      if (userData.length === 1 && userData[0].password === password) {
        // Login successful
        const loggedInUser = userData[0].username;

        // Call the onLogin function with the logged-in user data
        onLogin(loggedInUser);

        // Redirect to the home page after login
        navigate('/');
      } else {
        // Incorrect username or password
        alert('Incorrect username or password');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96 h-96 mb-80">
        <h2 className="text-2xl font-bold mb-4">LOGIN</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
              Username
            </label>
            <input
              type="text"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your username"
              value={id}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border rounded w-full py-2 px-3"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <br />
          <button
            type="button"
            className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;




