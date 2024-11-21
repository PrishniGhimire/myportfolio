import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { FaUser, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './About.css'; // Import the CSS file for styling

const About = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle navigation
  const handleWorkExperienceClick = () => {
    navigate('/projects'); // Navigate to the Projects page
  };

  return (
    <section id="about" className="about-section py-20 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-10 px-4">
        {/* Left Side: Image Container */}
        <div className="image-container flex-shrink-0 w-full lg:w-1/3 mb-10 lg:mb-0">
          <img
            src="/images/prishni.jpg" // Corrected path, relative to the public folder
            alt="Profile"
            className="profile-image rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Content Container */}
        <div className="content-container flex-1">
          <h2 className="text-4xl font-bold mb-8 text-center lg:text-left">About Me</h2>
          <div className="flex flex-col lg:flex-row justify-start gap-10">
            {/* Who I Am Card */}
            <div className="icon-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow flex-grow">
              <FaUser size={50} className="mb-4 text-blue-500 transition-transform transform hover:scale-110" />
              <h3 className="text-2xl font-semibold mb-2">Who I Am</h3>
              <p className="text-gray-700">
                I am Prishni Ghimire, a UI/UX Designer with experience working at Digital Sangalo Pvt. LTD.
              </p>
            </div>

            {/* Work Experience Card */}
            <div
              className="icon-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow cursor-pointer flex-grow"
              onClick={handleWorkExperienceClick} // Add onClick handler
            >
              <FaBriefcase size={50} className="mb-4 text-blue-500 transition-transform transform hover:scale-110" />
              <h3 className="text-2xl font-semibold mb-2">Work Experience</h3>
              <p className="text-gray-700">
                I have worked on various projects, focusing on creating intuitive and visually appealing user interfaces.
              </p>
            </div>

            {/* Education Card */}
            <div className="icon-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow flex-grow">
              <FaGraduationCap size={50} className="mb-4 text-blue-500 transition-transform transform hover:scale-110" />
              <h3 className="text-2xl font-semibold mb-2">Education</h3>
              <p className="text-gray-700">
                I hold a degree in Bachelor of Science in Computer Science and Information Technology (BSc.CSIT) and have further specialized in UI/UX design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
