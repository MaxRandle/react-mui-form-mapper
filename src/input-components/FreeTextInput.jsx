// input component must-catch props if not accepted as ...rest by underlying element:
// // passed from schema
// label,
// validate,
// // parent state and setters
// value,
// setValue,
// error,
// setError,
// // misc
// className,
// disabled,

import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

const FreeTextInput = ({
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
      label={label}
      value={value}
      error={error}
      onChange={handleValueChange}
      // helperText={displayBlankHelper ? helperText || " " : helperText}
      fullWidth
      className={className}
      disabled={disabled}
      {...rest}
    />
  );
};

// FreeTextInput.propTypes = {
//   label: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   onUpdate: PropTypes.func.isRequired,
//   error: PropTypes.bool,
// };

export default FreeTextInput;
