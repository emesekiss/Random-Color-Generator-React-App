import React, { useState } from 'react';
import Header from './Header';
import './style.css';

// This is a function component:

const App = () => {
  // Use hooks here before the return statement:

  const [color, setColor] = useState('');

  const createRandomHex = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    setColor(randomColor);
  };

  return (
    <React.Fragment>
      <Header />
      <div className="colorthis">
        <div style={{ backgroundColor: color }} className="hex">
          Hex code: {color}
        </div>
        <button onClick={createRandomHex}>Generate Color</button>
      </div>
    </React.Fragment>
  );
};

export default App;
