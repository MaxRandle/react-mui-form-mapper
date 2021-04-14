import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";

export const GenericDateIsoStringInputComponent = ({
  value,
  onUpdate,
  ...rest
}) => {
  const [dateString, setDateString] = useState(
    value ? value.split("T")[0] : ""
  );
  const [timeString, setTimeString] = useState(
    value ? value.split("T")[1] : "00:00:00"
  );

  const handleChange = (event) => {
    setDateString(event.target.value);
    if (event.target.value === "") onUpdate(event.target.name, undefined);
    else onUpdate(event.target.name, `${event.target.value}T${timeString}`);
  };

  return (
    <TextField
      type="date"
      value={dateString}
      onChange={handleChange}
      {...rest}
    />
  );
};
GenericDateIsoStringInputComponent.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  error: PropTypes.bool,
};
