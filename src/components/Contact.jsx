import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.status === 'success') {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('An error occurred.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 relative">
      <div className="absolute top-0 left-0 p-6 flex flex-col space-y-4">
        <a href="https://www.facebook.com/prishni.p/" className="text-blue-600 hover:text-blue-800">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.linkedin.com/in/prishni-ghimire-96327b252/" className="text-blue-600 hover:text-blue-800">
          <FaLinkedin size={30} />
        </a>
        <a href="https://x.com/_PrishniGhimire" className="text-blue-600 hover:text-blue-800">
          <FaTwitter size={30} />
        </a>
        <a href="https://github.com/PrishniGhimire" className="text-blue-600 hover:text-blue-800">
          <FaGithub size={30} />
        </a>
      </div>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
        <form className="max-w-4xl mx-auto p-8 bg-white rounded shadow-lg" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-4 mb-4 border rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-4 mb-4 border rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-4 mb-4 border rounded"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded w-full hover:bg-blue-700 transition"
          >
            Send Message
          </button>
          {status && <p className="mt-4 text-center text-red-500">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
