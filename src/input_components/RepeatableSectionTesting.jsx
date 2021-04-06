import React from "react";
import {
  Box,
  createMuiTheme,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField,
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

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {
      paddingLeft: 14,
    },

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {
      paddingRight: 14,
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: "18.5px 14px",
      "&$marginDense": {
        paddingTop: 10.5,
        paddingBottom: 10.5,
      },
    },

    /* Styles applied to the `NotchedOutline` element. */
    notchedOutline: {
      borderColor: borderColor,
    },

    /* Styles applied to the `input` element. */
    input: {
      padding: "18.5px 14px",
      // "&:-webkit-autofill": {
      //   WebkitBoxShadow:
      //     theme.palette.type === "light" ? null : "0 0 0 100px #266798 inset",
      //   WebkitTextFillColor: theme.palette.type === "light" ? null : "#fff",
      //   caretColor: theme.palette.type === "light" ? null : "#fff",
      //   borderRadius: "inherit",
      // },
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 10.5,
      paddingBottom: 10.5,
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      padding: 0,
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {
      paddingLeft: 0,
    },

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {
      paddingRight: 0,
    },

    content: {
      padding: "18.5px 14px 0px 14px",
      marginBottom: "18.5px",
    },
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

  // return (
  //   <FormControl className={clsx(classes.root)} {...rest}>
  //     <InputLabel
  //       error={error}
  //       shrink
  //       disabled={disabled}
  //       variant="outlined"
  //       // className={clsx(classes.in)}
  //       // htmlFor="component-outlined"
  //     >
  //       {label}
  //     </InputLabel>
  //     <Box className={clsx(classes.input)}>content</Box>
  //     <NotchedOutline
  //       disabled={disabled}
  //       labelWidth={0}
  //       notched
  //       className={clsx(className, classes.notchedOutline)}
  //       focused={focused}
  //       label={label}
  //     />
  //     {/* <Input id="my-input" aria-describedby="my-helper-text" /> */}
  //     <FormHelperText id="my-helper-text">
  //       We'll never share your email.
  //     </FormHelperText>
  //   </FormControl>
  // );

  // return (
  //   <OutlinedInput
  //     {...rest}
  //     // label={(props) => (
  //     //   <InputLabel
  //     //     {...props}
  //     //     error={error}
  //     //     shrink
  //     //     disabled={disabled}
  //     //     variant="outlined"
  //     //     // className={clsx(classes.in)}
  //     //     // htmlFor="component-outlined"
  //     //   >
  //     //     {label}
  //     //   </InputLabel>
  //     // )}
  //     label={"labbbb"}
  //     helperText="helperText"
  //     inputComponent={(props) => <Box {...props}>CONTENTTTTTT</Box>}
  //   />
  // );

  return (
    <TextField
      {...rest}
      variant="outlined"
      InputLabelProps={{ shrink: true }}
      label={label}
      helperText={helperText}
      InputProps={{
        inputComponent: (props) => <Box {...props}>CONTENTTTTTT</Box>,
      }}
    />
  );
};

export default RepeatableSection;
