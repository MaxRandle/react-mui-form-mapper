import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import PropTypes from "prop-types";

const PasswordInput = ({
  label,
  value,
  setValue,
  error,
  helperText,
  className,
  disabled,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      label={label}
      value={value}
      error={error}
      onChange={(event) => setValue(event.target.value)}
      helperText={helperText}
      fullWidth
      className={className}
      disabled={disabled}
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  );
};

export default PasswordInput;

PasswordInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};
