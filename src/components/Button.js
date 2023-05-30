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

export default Button;
