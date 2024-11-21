import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-image.jpg';
 // Adjusted path

const Home = () => {
  return (
    <section id="home" className="relative h-screen bg-gray-800 text-white">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hero" 
          className="object-cover w-full h-full opacity-50" 
        />
      </div>
      <div className="relative flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Hi! I'm <span className="text-blue-400">Prishni Ghimire</span>, a passionate <span className="text-blue-400">UI/UX Designer</span>.
          </h1>
          <p className="text-lg mb-8">
            I have a strong foundation in Information Technology. I'm skilled in crafting intuitive and visually appealing interfaces that enhance user experiences. My expertise in wireframing, prototyping, and user research ensures that I create designs that meet user needs and align with business goals. With a solid understanding of front-end development, I collaborate seamlessly with development teams to bring my designs to life. I'm dedicated to staying up-to-date with the latest design trends and methodologies to deliver innovative and impactful user experiences.
          </p>
          <Link to="/contact" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;

