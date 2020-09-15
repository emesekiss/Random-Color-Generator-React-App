import React, { useState } from 'react';

//This is a function component:

const App = () => {
  //Use hooks here before the return statement:

  const [color, setColor] = useState('#ffffff');
  const randomHex = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    setColor(randomColor);
  };
  return (
    <>
      <div className="App" style={{ backgroundColor: `${color}` }}>
        <header>Welcome to Random Color Generator!</header>
        <h1>{color}</h1>
        <button onClick={randomHex}>Generate Color</button>
      </div>
    </>
  );
};

export default App;
