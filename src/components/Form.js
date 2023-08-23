
import React, { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';

const Form = () => {
  const location = useLocation();
  console.log("==============",location.state)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://training-project-8tay.onrender.com/create", formData);
      console.log('Response: ', response.data);
      navigate('/'); // Use navigate to navigate to the homepage
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <h3 className='h3'>Form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
