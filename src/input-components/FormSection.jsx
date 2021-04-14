import React, { useState } from "react";
import { Box, makeStyles, TextField } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {},
  inputRoot: {
    cursor: "default",
  },
  flexColContainer: {
    display: "flex",
    flexDirection: "column",
  },
  flexColItem: {
    marginBottom: theme.spacing(1),
  },
}));

const FormSection = ({
  // passed from schema
  label,
  toString, // unused
  Component, // unused
  validate,
  children,
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
  const classes = useStyles();
  const [childErrors, setChildErrors] = useState({});

  const handleValueChange = (childFieldName, value) =>
    setValue({ ...value, [childFieldName]: value });

  const handleErrorChange = (childFieldName, newError) => {
    const newChildErrors = { ...childErrors, [childFieldName]: newError };
    setChildErrors(newChildErrors);
    setError(Object.values(newChildErrors).includes(false) || !validate(value));
  };

  return (
    <TextField
      {...rest}
      diasbled={disabled}
      className={clsx(className, classes.root)}
      variant="outlined"
      InputLabelProps={{ shrink: true }}
      label={label}
      // helperText={helperText}
      multiline
      error={error}
      InputProps={{
        classes: {
          root: classes.inputRoot,
        },
        inputComponent: () => (
          <Box className={classes.flexColContainer}>
            {Object.keys(children).map((childFieldName) => {
              const child = children[childFieldName];
              return child.Component({
                ...child,
                value: value[childFieldName],
                setValue: (newValue) =>
                  handleValueChange(childFieldName, newValue),
                error: childErrors[childFieldName],
                setError: (newError) =>
                  handleErrorChange(childFieldName, newError),
                className: classes.flexColItem,
              });
            })}
          </Box>
        ),
      }}
    />
  );
};

export default FormSection;
