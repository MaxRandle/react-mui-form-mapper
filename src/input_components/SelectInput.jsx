import React from "react";
import PropTypes from "prop-types";
import { MenuItem, TextField } from "@material-ui/core";

const SelectInput = ({
  label,
  value,
  setValue,
  error,
  helperText,
  className,
  disabled,
  options,
  ...rest
}) => (
  <TextField
    label={label}
    value={value}
    error={error}
    onChange={(event) => setValue(event.target.value)}
    helperText={helperText}
    fullWidth
    className={className}
    disabled={disabled}
    select
    {...rest}
  >
    {options.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </TextField>
);

SelectInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SelectInput;
