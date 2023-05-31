import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [calculatorData, setCalculatorData] = useState({});

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);

    if (buttonName === '=') {
      if (newData.total) {
        setDisplay(newData.total);
      } else {
        setDisplay('0');
      }
      setCalculatorData({});
    } else if (['+', '-', 'x', '÷'].includes(buttonName)) {
      setDisplay(buttonName);
      setCalculatorData({
        total: display,
        next: null,
        operation: buttonName,
      });
    } else {
      if (newData.next) {
        setDisplay(newData.next);
      } else {
        setDisplay('0');
      }
      setCalculatorData(newData);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="keypad">
        <Button type="normal" label="AC" onClick={() => handleButtonClick('AC')} />
        <Button type="normal" label="+/-" onClick={() => handleButtonClick('+/-')} />
        <Button type="normal" label="%" onClick={() => handleButtonClick('%')} />
        <Button type="orange" label="÷" onClick={() => handleButtonClick('÷')} />
        <Button type="normal" label="7" onClick={() => handleButtonClick('7')} />
        <Button type="normal" label="8" onClick={() => handleButtonClick('8')} />
        <Button type="normal" label="9" onClick={() => handleButtonClick('9')} />
        <Button type="orange" label="x" onClick={() => handleButtonClick('x')} />
        <Button type="normal" label="4" onClick={() => handleButtonClick('4')} />
        <Button type="normal" label="5" onClick={() => handleButtonClick('5')} />
        <Button type="normal" label="6" onClick={() => handleButtonClick('6')} />
        <Button type="orange" label="-" onClick={() => handleButtonClick('-')} />
        <Button type="normal" label="1" onClick={() => handleButtonClick('1')} />
        <Button type="normal" label="2" onClick={() => handleButtonClick('2')} />
        <Button type="normal" label="3" onClick={() => handleButtonClick('3')} />
        <Button type="orange" label="+" onClick={() => handleButtonClick('+')} />
        <Button type="large" label="0" onClick={() => handleButtonClick('0')} />
        <Button type="normal" label="." onClick={() => handleButtonClick('.')} />
        <Button type="orange" label="=" onClick={() => handleButtonClick('=')} />
      </div>
    </div>
  );
};

export default Calculator;
