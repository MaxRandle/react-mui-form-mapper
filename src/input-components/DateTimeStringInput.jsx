import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";

const DateTimeStringInput = ({
  // passed from schema
  label,
  validate,
  toString, // unused
  Component, // unused
  // parent state and setters
  value,
  setValue,
  error,
  setError,
  // misc
  className,
  disabled,
  // rest
  ...rest
}) => {
  const handleValueChange = (event) => {
    setValue(event.target.value);
    setError(!validate(value));
  };

  return (
    <TextField
      type="datetime-local"
      value={value}
      label={label}
      InputLabelProps={{ shrink: true }}
      onChange={handleValueChange}
      // helperText={displayBlankHelper ? helperText || " " : helperText}
      fullWidth
      className={className}
      disabled={disabled}
      {...rest}
    />
  );
};

// DateTimeStringInput.propTypes = {
//   label: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   onUpdate: PropTypes.func.isRequired,
//   error: PropTypes.bool,
// };

export default DateTimeStringInput;
