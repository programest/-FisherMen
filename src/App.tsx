import React from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './component/Character/character';
import Calculation from './component/Сalculation/calculation';
function App() {
  return (
    <div className="App">
      <Calculation />
      <div className="ocean">
      <div className="oceanUseable">    
          <Character />
      </div>
      <div className="oceanUnUseable"></div>
      </div>
     
  
    </div>
  );
}

export default App;
