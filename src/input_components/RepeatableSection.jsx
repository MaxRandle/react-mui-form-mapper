import React from "react";
import {
  Box,
  createMuiTheme,
  FormControl,
  InputLabel,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import NotchedOutline from "@material-ui/core/OutlinedInput/NotchedOutline";
import clsx from "clsx";

var useStyles = makeStyles((theme) => {
  const borderColor =
    theme.palette.type === "light"
      ? "rgba(0, 0, 0, 0.23)"
      : "rgba(255, 255, 255, 0.23)";

  return {
    /* Styles applied to the root element. */
    root: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      "&:hover $notchedOutline": {
        borderColor: theme.palette.text.primary,
      },
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        "&:hover $notchedOutline": {
          borderColor: borderColor,
        },
      },
      "&$focused $notchedOutline": {
        borderColor: theme.palette.primary.main,
        borderWidth: 2,
      },
      "&$error $notchedOutline": {
        borderColor: theme.palette.error.main,
      },
      "&$disabled $notchedOutline": {
        borderColor: theme.palette.action.disabled,
      },
    },

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {
      "&$focused $notchedOutline": {
        borderColor: theme.palette.secondary.main,
      },
    },

    /* Styles applied to the `input` element. */
    input: {
      // padding: "18.5px 14px",
      padding: "0px 14px",
    },
    inputMultiline: {
      padding: 0,
    },

    content: { paddingLeft: "14px" },
  };
});

const RepeatableSection = ({
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
  ...rest
}) => {
  const classes = useStyles();

  const handleCreate = () => onUpdate(name, [{}, ...value]);
  const handleUpdate = (id, newValue) => {
    const idx = value.findIndex((e) => id === e.id);
    onUpdate(name, [...value.splice(idx, 0, newValue)]);
  };
  const handleDelete = (id) => {
    const idx = value.findIndex((e) => id === e.id);
    onUpdate(name, [...value.splice(idx, 1)]);
  };

  const InputLabelOverride = () => (
    <InputLabel
      error={error}
      shrink
      disabled={disabled}
      variant="outlined"
      // htmlFor="component-outlined"
    >
      {label}
    </InputLabel>
  );

  return (
    <Box className={clsx(classes.root)} {...rest}>
      <InputLabelOverride />
      <NotchedOutline
        disabled={disabled}
        labelWidth={0}
        notched
        className={clsx(className)}
        focused={focused}
        label={<InputLabelOverride />}
      />
      <Box className={clsx(classes.input)}>content</Box>
      <Box className={clsx(classes.input)}>content</Box>

      {/* <Box className={clsx(classes.input)}></Box> */}
    </Box>
  );
};

export default RepeatableSection;
