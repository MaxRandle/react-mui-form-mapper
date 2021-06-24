import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

const FreeTextInput = ({
  label,
  value,
  setValue,
  error,
  helperText,
  className,
  disabled,
  ...rest
}) => (
  <TextField
    label={label}
    value={value}
    error={error}
    onChange={(event) => setValue(event.target.value)}
    helperText={helperText}
    // helperText={displayBlankHelper ? helperText || " " : helperText}
    fullWidth
    className={className}
    disabled={disabled}
    {...rest}
  />
);

FreeTextInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default FreeTextInput;
