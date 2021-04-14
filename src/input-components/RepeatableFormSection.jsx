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
  name,
  value,
  onUpdate,
  helperText,
  displayBlankHelper,
  error,
  className,
  focused,
  disabled,
  label,
  children,
  ...rest
}) => {
  const classes = useStyles();

  const handleCreate = () => onUpdate(name, [children, ...value]);
  const handleUpdate = (id, newValue) => {
    const idx = value.findIndex((e) => id === e.id);
    onUpdate(name, [...value.splice(idx, 0, newValue)]);
  };
  const handleDelete = (id) =>
    onUpdate(
      name,
      value.filter((e) => id !== e.id)
    );

  return (
    <TextField
      {...rest}
      className={clsx(className, classes.root)}
      variant="outlined"
      InputLabelProps={{ shrink: true }}
      label={label}
      helperText={helperText}
      multiline
      error
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
              onClick={handleCreate}
            >
              add
            </Button>
            {/* <IconButton>
              <Add />
            </IconButton> */}
            {value.map((Child) => {
              const id = "";
              return <Child key={id} />;
            })}
          </Box>
        ),
      }}
    />
  );
};

export default RepeatableSectionContainer;
