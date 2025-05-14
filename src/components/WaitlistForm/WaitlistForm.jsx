import React, { useState } from 'react';

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    country: 'United States',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Placeholder for form submission
    try {
      const response = await fetch('https://mom.ai/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Successfully joined the waitlist!');
        setFormData({ username: '', email: '', country: 'United States' });
      } else {
        alert('Failed to join the waitlist. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const countries = ['United States', 'United Kingdom', 'Japan', 'India', 'Brazil', 'Others'];

  return (
    <section id="waitlist" className="bg-mom-ai-blue py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-mom-ai-dark-font text-center mb-10 font-montserrat">Join the Mom.AI Waitlist</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl">
          <div className="mb-6">
            <label htmlFor="username" className="block text-mom-ai-dark-font font-semibold mb-2 font-opensans">Username</label>
            <input 
              type="text" 
              name="username" 
              id="username" 
              value={formData.username} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mom-ai-orange-button focus:border-mom-ai-orange-button transition duration-150"
              required 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-mom-ai-dark-font font-semibold mb-2 font-opensans">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mom-ai-orange-button focus:border-mom-ai-orange-button transition duration-150"
              required 
            />
          </div>
          <div className="mb-8">
            <label htmlFor="country" className="block text-mom-ai-dark-font font-semibold mb-2 font-opensans">Country</label>
            <select 
              name="country" 
              id="country" 
              value={formData.country} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-mom-ai-orange-button focus:border-mom-ai-orange-button transition duration-150 bg-white"
            >
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <button 
            type="submit" 
            className="w-full bg-mom-ai-orange-button text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition duration-150 text-lg font-semibold"
          >
            Submit
          </button>
          <p className="text-xs text-gray-600 mt-6 text-center font-opensans">Your data is safe with us. We value your privacy.</p>
        </form>
      </div>
    </section>
  );
};

export default WaitlistForm;
