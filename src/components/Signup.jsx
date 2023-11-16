  import React, { useState } from 'react';

  const Signup = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      // Perform your validation checks
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.username || !formData.password || !formData.confirmPassword) {
        alert('All fields are required');
      } else if (!isValidEmail(formData.email)) {
        alert('Invalid email format');
      } else if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
      } else {
        // If all validations pass, you can proceed with signup logic
        // For simplicity, we'll just log the form data for now
        console.log('Signup successful:', formData);
      }
    };

    const isValidEmail = (email) => {
      // Basic email validation, you can enhance it with a regex pattern
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    return (
      <div className="flex justify-center items-center mt-12 ml-64 ">
        <div className="bg-white p-8 rounded shadow-md w-full h-full mb-80">
          <h2 className="text-2xl font-bold mb-4">SIGN UP!!!!</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex">
              <div className="w-1/2 pr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border rounded w-full py-2 px-3"
                  />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4 flex">
              <div className="w-1/2 pr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Choose a username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4 flex">
              <div className="w-1/2 pr-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2 pl-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-center mr-12 mt-8">
              <button type="submit" className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  export default Signup;

  
