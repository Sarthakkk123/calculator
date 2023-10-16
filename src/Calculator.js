import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('0');

  const handleButtonClick = (value) => {
    if (input === '0') {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const handleEqualsClick = () => {
    try {
      // eslint-disable-next-line no-eval
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClearClick = () => {
    setInput('0');
  };

  return (
    <div className="calculator">
      <div className="calculator-display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="calculator-buttons">
        <div className="row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button className="operator" onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button className="operator" onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button className="operator" onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button className="zero" onClick={() => handleButtonClick('0')}>0</button>
          <button className="decimal" onClick={() => handleClearClick()}>AC</button>
          <button className="operator" onClick={handleEqualsClick}>=</button>
          <button className="operator" onClick={() => handleButtonClick('+')}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
