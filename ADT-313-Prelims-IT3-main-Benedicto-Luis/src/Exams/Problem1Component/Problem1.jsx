// Problem1Component.js
import React, { useState } from 'react';
import './problem1.css'; // Import the CSS for styling

function Problem1Component() {
  // Student Information
  const student = {
    name: 'Luis Benedicto',
    course: 'BSIT',
    section: '3A',
  };

  // User Profile Information (from Problem 2)
  const user = {
    name: 'Luis',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  // State for toggling profile visibility
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  // Function to toggle profile visibility
  function toggleProfile() {
    setIsProfileVisible(prevState => !prevState);
  }

  // Profile component (from Problem 2)
  function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className='avatar'
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
        />
      </>
    );
  }

  // Initial content when profile is hidden
  function InitialContent() {
    return <h1>User profile is hidden.</h1>;
  }

  return (
    <div className="problem1-container">
      {/* Display student info */}
      <h1>Student Information</h1>
      <p><strong>Student Name:</strong> {student.name}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Section:</strong> {student.section}</p>
      
      {/* Show/hide profile */}
      <div>
        {isProfileVisible ? <Profile /> : <InitialContent />}
        <button type='button' onClick={toggleProfile}>
          {isProfileVisible ? 'Hide Profile' : 'Show Profile'}
        </button>
      </div>
    </div>
  );
}

export default Problem1Component;
