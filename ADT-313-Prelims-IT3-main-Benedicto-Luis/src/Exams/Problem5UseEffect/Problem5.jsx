import { useEffect, useRef, useState } from 'react';
import Loading from './Problem5Components/Loading';

export default function Problem5() {
  const [isLoading, setIsLoading] = useState(true);
  const [isIdle, setIsIdle] = useState(true); 
  const typingTimeoutRef = useRef(null); 


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  
  const handleInputChange = () => {
    setIsIdle(false); 

    
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    
    typingTimeoutRef.current = setTimeout(() => {
      setIsIdle(true);
    }, 2000);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div style={{ display: 'block' }}>
            Input: <input type='text' onChange={handleInputChange} />
            <p>User is {isIdle ? 'idle...' : 'typing...'}</p>
          </div>
        </>
      )}
    </>
  );
}