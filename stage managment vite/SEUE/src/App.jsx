import React, { useState } from 'react';
import Timer from './components/Timer';

function App() {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div>
      <button onClick={() => setShowComponent(!showComponent)}>
        Toggle Timer
      </button>
      {showComponent && <Timer />}
    </div>
  );
}

export default App;
