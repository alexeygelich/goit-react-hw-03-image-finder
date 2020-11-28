import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ handleClick, children }) => (
  <button className={styles.Button} type="button" onClick={handleClick}>
    {children}
  </button>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
