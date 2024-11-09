import React, { useState } from 'react';

function Problem2() {
  const user = {
    name: 'Luis Benedicto',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };


  const [isProfileVisible, setIsProfileVisible] = useState(false);


  const toggleProfile = () => {
    setIsProfileVisible(prevState => !prevState);
  };

  
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

  
  function InitialContent() {
    return <h1>User profile is hidden.</h1>;
  }

  return (
    <div>
      {/* Conditional rendering based on isProfileVisible */}
      {isProfileVisible ? <Profile /> : <InitialContent />}
      
      {/* Button to toggle visibility */}
      <button type='button' onClick={toggleProfile}>
        {isProfileVisible ? 'Hide Profile' : 'Show Profile'}
      </button>
    </div>
  );
}

export default Problem2;
