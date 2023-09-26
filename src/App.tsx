import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rod from './component/rod/Rod';
import Calculation from './component/calculation/Calculation';
import { Player } from './component/player/Player';

import Audio from './component/audio/Audio';
// import Water from './component/Water';
function App() {
  return (
    <div className="App">
      
      <Audio />
      <Calculation />
      <div className="ocean">
      <div className="oceanUseable">    
      <Player />
          {/* <Rod /> */}
      </div>
      <div className="oceanUnUseable"></div>
      </div>
     
      {/* <Water/> */}
  
    </div>
  );
}

export default App;
