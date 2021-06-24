import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  makeStyles,
  Switch,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  label: {
    marginLeft: 0,
  },
}));

const SwitchInput = ({
  label,
  value,
  setValue,
  error,
  helperText,
  className,
  disabled,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <FormControl className={className} component="fieldset" {...rest}>
      <FormControlLabel
        className={classes.label}
        labelPlacement="start"
        label={label}
        control={
          <Switch
            checked={value}
            onChange={(event) => setValue(event.target.checked)}
            name="test"
            disabled={disabled}
          />
        }
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

SwitchInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.bool.isRequired,
  setValue: PropTypes.func.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default SwitchInput;
