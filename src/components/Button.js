import PropTypes from 'prop-types';

const Button = ({ type, label, onClick }) => (
  <button type="button" className={`button ${type}`} onClick={onClick}>
    {label}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
