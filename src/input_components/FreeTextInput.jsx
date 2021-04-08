// input component must-catch props if not accepted as ...rest by underlying element:
// label
// name
// value
// onUpdate
// error
// helperText

import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

const FreeTextInput = ({
  onUpdate,
  helperText,
  displayBlankHelper,
  ...rest
}) => {return(
  <TextField
    onChange={(event) => onUpdate(event.target.name, event.target.value)}
    helperText={displayBlankHelper ? helperText || " " : helperText}
    fullWidth
    {...rest}
  />
)};

FreeTextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  error: PropTypes.bool,
};

export default FreeTextInput;
