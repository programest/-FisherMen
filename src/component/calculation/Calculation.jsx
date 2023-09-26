import React from 'react';
import './Calculation.css';
function Calculation() {

  return (
    <div className="calculationBlock">
      <div className="calculation__container">
          <h1>Adil</h1>
          <div className="fish someCalculation">
            <h3 className='someCalculation-title'>Рыб собрано:</h3>
            <p className='someCalculation-text'>3</p>
          </div>
          <div className="time someCalculation">
            <h3 className='someCalculation-title'>Времени проведенно:</h3>
            <p className='someCalculation-text'>30 минут</p>
          </div>
      </div>
    </div>
  );
}

export default Calculation;
