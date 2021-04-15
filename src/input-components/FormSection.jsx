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
    flexGrow: 1,
  },
  flexColItem: {
    marginBottom: theme.spacing(2),
    "&:last-child": {
      marginBottom: theme.spacing(0),
    },
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

  const handleValueChange = (childFieldName, newValue) =>
    setValue({ ...value, [childFieldName]: newValue });

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
      fullWidth
      error={error}
      InputProps={{
        classes: {
          root: classes.inputRoot,
        },

        // inputComponent: () => <></>,

        inputComponent: React.createRef((props, ref) => (
          <Box ref={ref} {...props} className={classes.flexColContainer}>
            {Object.keys(children).map((childFieldName) => {
              const child = children[childFieldName];
              return child.Component({
                ...child,
                key: childFieldName,
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
        )),

        // inputComponent: () => (
        //   <Box className={classes.flexColContainer}>
        //     {Object.keys(children).map((childFieldName) => {
        //       const child = children[childFieldName];
        //       return child.Component({
        //         ...child,
        //         key: childFieldName,
        //         value: value[childFieldName],
        //         setValue: (newValue) =>
        //           handleValueChange(childFieldName, newValue),
        //         error: childErrors[childFieldName],
        //         setError: (newError) =>
        //           handleErrorChange(childFieldName, newError),
        //         className: classes.flexColItem,
        //       });
        //     })}
        //   </Box>
        // ),
      }}
    >
      <Box className={classes.flexColContainer}>
        {Object.keys(children).map((childFieldName) => {
          const child = children[childFieldName];
          return child.Component({
            ...child,
            key: childFieldName,
            value: value[childFieldName],
            setValue: (newValue) => handleValueChange(childFieldName, newValue),
            error: childErrors[childFieldName],
            setError: (newError) => handleErrorChange(childFieldName, newError),
            className: classes.flexColItem,
          });
        })}
      </Box>
    </TextField>
  );
};

export default FormSection;
