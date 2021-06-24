import React from "react";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";

const DateTimeStringInput = ({
  label,
  value,
  setValue,
  error,
  helperText,
  className,
  disabled,
  ...rest
}) => {
  return (
    <TextField
      type="datetime-local"
      label={label}
      value={value}
      error={error}
      InputLabelProps={{ shrink: true }}
      onChange={(event) => setValue(event.target.value)}
      helperText={helperText}
      fullWidth
      className={className}
      disabled={disabled}
      {...rest}
    />
  );
};

DateTimeStringInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default DateTimeStringInput;
