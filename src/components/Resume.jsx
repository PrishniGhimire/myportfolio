import React from 'react';

const Resume = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">My Resume</h2>
      <div className="max-w-md mx-auto">
        <p className="mb-4">
          You can view or download my CV using the link below:
        </p>
        <a
          href="/resumes/prishnicv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          View My CV
        </a>
      </div>
    </div>
  );
};

export default Resume;
