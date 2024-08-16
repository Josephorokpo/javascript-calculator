import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import './App.css';

const App = () => {
  const [display, setDisplay] = useState('0');
  const [operation, setOperation] = useState('');
  const [isNewCalculation, setIsNewCalculation] = useState(true);

  const handleClick = (value) => {
    if (isNewCalculation) {
      setDisplay(value);
      setIsNewCalculation(false);
    } else {
      setDisplay(prevDisplay => prevDisplay === '0' ? value : prevDisplay + value);
    }
  };

  const handleOperator = (operator) => {
    if (isNewCalculation) return;
    setOperation(prevOperation => prevOperation + display + operator);
    setIsNewCalculation(true);
  };

  const handleClear = () => {
    setDisplay('0');
    setOperation('');
    setIsNewCalculation(true);
  };

  const handleDecimal = () => {
    if (isNewCalculation) {
      setDisplay('0.');
      setIsNewCalculation(false);
    } else if (!display.includes('.')) {
      setDisplay(prevDisplay => prevDisplay + '.');
    }
  };

  const handleEquals = () => {
    if (isNewCalculation) return;
    const result = eval(operation + display);
    setDisplay(result.toFixed(4));
    setOperation('');
    setIsNewCalculation(true);
  };

  return (
    <div className="calculator">
      <Display value={display} />
      <div id="buttons">
        <Button id="clear" className="button" onClick={handleClear}>AC</Button>
        <Button id="divide" className="button" onClick={handleOperator}>/</Button>
        <Button id="multiply" className="button" onClick={handleOperator}>*</Button>
        <Button id="subtract" className="button" onClick={handleOperator}>-</Button>
        <Button id="add" className="button" onClick={handleOperator}>+</Button>
        <Button id="seven" className="button" onClick={handleClick}>7</Button>
        <Button id="eight" className="button" onClick={handleClick}>8</Button>
        <Button id="nine" className="button" onClick={handleClick}>9</Button>
        <Button id="four" className="button" onClick={handleClick}>4</Button>
        <Button id="five" className="button" onClick={handleClick}>5</Button>
        <Button id="six" className="button" onClick={handleClick}>6</Button>
        <Button id="one" className="button" onClick={handleClick}>1</Button>
        <Button id="two" className="button" onClick={handleClick}>2</Button>
        <Button id="three" className="button" onClick={handleClick}>3</Button>
        <Button id="zero" className="button" onClick={handleClick}>0</Button>
        <Button id="decimal" className="button" onClick={handleDecimal}>.</Button>
        <Button id="equals" className="button" onClick={handleEquals}>=</Button>
      </div>
    </div>
  );
};

export default App;
