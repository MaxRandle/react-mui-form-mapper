import React from "react";
import { makeStyles, TextField } from "@material-ui/core";
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
  name,
  value,
  onUpdate,
  valid,
  setValid,
  validate,
  helperText,
  displayBlankHelper,
  className,
  focused,
  disabled,
  label,
  Child,
  ...rest
}) => {
  const classes = useStyles();

  const handleUpdate = (childFieldName, value) => {
    const newValue = { ...value, [childFieldName]: value };
    setValid(validate(newValue));
    onUpdate(name, newValue);
  };

  return (
    <TextField
      {...rest}
      className={clsx(className, classes.root)}
      variant="outlined"
      InputLabelProps={{ shrink: true }}
      label={label}
      helperText={helperText}
      multiline
      error={!valid}
      InputProps={{
        classes: {
          root: classes.inputRoot,
        },
        inputComponent: () => <Child onUpdate={handleUpdate} />,
      }}
    />
  );
};

export default FormSection;
