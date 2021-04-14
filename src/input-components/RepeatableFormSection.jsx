import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  makeStyles,
  TextField,
} from "@material-ui/core";
import clsx from "clsx";
import { Add } from "@material-ui/icons";

const useStyles = makeStyles((theme) => {
  const borderColor =
    theme.palette.type === "light"
      ? "rgba(0, 0, 0, 0.23)"
      : "rgba(255, 255, 255, 0.23)";

  return {
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
    border: {
      padding: "18.5px 14px",
      borderColor: borderColor,
      "&:hover": {
        borderColor: theme.palette.text.primary,
      },
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        "&:hover": {
          borderColor: borderColor,
        },
      },
      // "&$error": {
      //   borderColor: theme.palette.error.main,
      // },
    },
    borderError: {
      borderColor: theme.palette.error.main,
    },
  };
});

const RepeatableSectionContainer = ({
  // passed from schema
  label,
  toString, // unused
  Component, // unused
  validate,
  child,
  blankNewChild,
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

  const handleCreate = () =>
    setValue([{ id: Math.random(), ...blankNewChild }, ...value]);
  const handleUpdate = (id, newValue) => {
    const idx = value.findIndex((e) => id === e.id);
    setValue([...value.splice(idx, 0, newValue)]);
  };
  const handleDelete = (id) => setValue(value.filter((e) => id !== e.id));

  const handleErrorChange = (id, newError) => {
    const newChildErrors = { ...childErrors, [id]: newError };
    setChildErrors(newChildErrors);
    setError(Object.values(newChildErrors).includes(false) || !validate(value));
  };

  return (
    <TextField
      {...rest}
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
            <Button
              variant="outlined"
              color="primary"
              className={classes.flexColItem}
              onClick={handleCreate}
            >
              add
            </Button>

            {value.map((section) => {
              return child.Component({
                key: section.id,
                ...child,
                value: section,
                setValue: (newValue) => handleUpdate(section.id, newValue),
                error: childErrors[section.id],
                setError: (newError) => handleErrorChange(section.id, newError),
                className: classes.flexColItem,
              });
            })}
          </Box>
        ),
      }}
    />
  );
};

export default RepeatableSectionContainer;
