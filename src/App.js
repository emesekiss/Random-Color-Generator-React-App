import React, { useState } from 'react';
import Header from './Header';
import './Style.css';

//This is a function component:

const App = () => {
  //Use hooks here before the return statement:

  const [color, setColor] = useState('');
  const randomHex = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    setColor(randomColor);
  };

  return (
    <React.Fragment>
      <Header />
      <div className="colorthis">
        <div style={{ backgroundColor: `${color}` }} className="hex">
          Hex code: {color}
        </div>
        <button onClick={randomHex}>Generate Color</button>
      </div>
    </React.Fragment>
  );
};

export default App;
