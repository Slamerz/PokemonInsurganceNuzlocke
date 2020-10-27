import React from 'react';
import './App.css';
// @ts-ignore
import Spritesheet from 'react-responsive-spritesheet';
import Img from './001.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Spritesheet
            image={Img}
            widthFrame={64}
            heightFrame={64}
            steps={16}
            fps={3}
            loop={true}/>

      </header>
    </div>
  );
}

export default App;
