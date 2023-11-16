import React, { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server or display a success message)
    console.log('Form submitted:', formData);
    // Clear the form fields after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className='flex w-full justify-center items-center'>
      <div className="bg-slate-200 p-8 rounded shadow-md w-2/4 h-96  ">
        <h1 className='text-5xl font-bold text-center'>Contact us !!</h1>
        <form onSubmit={handleSubmit} className='mt-8'>
          <label className='block text-black text-center mb-2'>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='rounded-md mx-2'
            />
          </label>
          <label className='block text-black text-center mb-2'>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='rounded-md mx-3'
            />
          </label>
          <label className='block text-black text-center mb-2'>
            Message:  
            <br />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className='rounded-md h-28 w-56'
            ></textarea>
          </label>
          <div className="flex justify-center">
            <button type="submit" className='bg-teal-500 text-white py-2 px-4 rounded-md mt-4'>
              Submit
            </button>
          </div>
        </form> 
      </div>
      <div className="bg-slate-200 float-right  p-8 rounded shadow-md w-2/4 h-96 border-solid border-green-600 border-8">
        <p>Please feel free to ask or message anything</p>
      </div>
    </div>
  );
};
