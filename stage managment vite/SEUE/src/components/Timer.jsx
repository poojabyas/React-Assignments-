import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(10); // Initial countdown value

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return <div>{count}</div>;
}

export default Timer;
