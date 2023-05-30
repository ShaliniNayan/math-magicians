import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, label }) => (
  <button type="button" className={`button ${type}`}>
    {label}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const Calculator = () => (
  <div className="calculator">
    <div className="display">0</div>
    <div className="keypad">
      <Button type="normal" label="AC" />
      <Button type="normal" label="+/-" />
      <Button type="normal" label="%" />
      <Button type="orange" label="÷" />
      <Button type="normal" label="7" />
      <Button type="normal" label="8" />
      <Button type="normal" label="9" />
      <Button type="orange" label="x" />
      <Button type="normal" label="4" />
      <Button type="normal" label="5" />
      <Button type="normal" label="6" />
      <Button type="orange" label="-" />
      <Button type="normal" label="1" />
      <Button type="normal" label="2" />
      <Button type="normal" label="3" />
      <Button type="orange" label="+" />
      <Button type="large" label="0" />
      <Button type="normal" label="." />
      <Button type="orange" label="=" />
    </div>
  </div>
);

export default Calculator;
