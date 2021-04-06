import React from "react";
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
      "&$error": {
        borderColor: theme.palette.error.main,
      },
    },
  };
});

const RepeatableSectionContainer = ({
  name,
  value: valueArray,
  onUpdate,
  helperText,
  displayBlankHelper,
  error,
  className,
  focused,
  disabled,
  label,
  ...rest
}) => {
  const classes = useStyles();

  const handleCreate = () => onUpdate(name, [{}, ...valueArray]);
  const handleUpdate = (id, newValue) => {
    const idx = valueArray.findIndex((e) => id === e.id);
    onUpdate(name, [...valueArray.splice(idx, 0, newValue)]);
  };
  const handleDelete = (id) => {
    const idx = valueArray.findIndex((e) => id === e.id);
    onUpdate(name, [...valueArray.splice(idx, 1)]);
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
      InputProps={{
        classes: {
          root: classes.inputRoot,
        },
        inputComponent: () => (
          <Box className={classes.flexColContainer}>
            <Button
              variant="contained"
              color="primary"
              className={classes.flexColItem}
            >
              add
            </Button>
            <IconButton>
              <Add />
            </IconButton>
            {valueArray.map((value) => (
              <Box
                border={1}
                borderRadius="borderRadius"
                key={Math.random()}
                className={(classes.flexColItem, classes.border)}
              >
                {JSON.stringify(value)}
              </Box>
            ))}
          </Box>
        ),
      }}
    />
  );
};

export default RepeatableSectionContainer;
