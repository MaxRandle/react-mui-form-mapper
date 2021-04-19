import { InputBase, makeStyles } from "@material-ui/core";
import NotchedOutline from "@material-ui/core/OutlinedInput/NotchedOutline";
import clsx from "clsx";

const useStyles = makeStyles((theme) => {
  var borderColor =
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
      "&:-webkit-autofill": {
        WebkitBoxShadow:
          theme.palette.type === "light" ? null : "0 0 0 100px #266798 inset",
        WebkitTextFillColor: theme.palette.type === "light" ? null : "#fff",
        caretColor: theme.palette.type === "light" ? null : "#fff",
        borderRadius: "inherit",
      },
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
  };
});

const CustomOutlinedComponent = (props) => {
  const styles = useStyles();

  const classes = props.classes,
    _props$fullWidth = props.fullWidth,
    fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
    _props$inputComponent = props.inputComponent,
    inputComponent =
      _props$inputComponent === void 0 ? "input" : _props$inputComponent,
    label = props.label,
    _props$labelWidth = props.labelWidth,
    labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth,
    _props$multiline = props.multiline,
    multiline = _props$multiline === void 0 ? false : _props$multiline,
    notched = props.notched,
    _props$type = props.type,
    type = _props$type === void 0 ? "text" : _props$type;

  return (
    <InputBase
      className={clsx(classes.root)}
      renderSuffix={(state) => (
        <NotchedOutline
          className={clsx(classes.notchedOutline)}
          label={label}
          labelWidth={labelWidth}
          notched={
            typeof notched !== "undefined"
              ? notched
              : Boolean(state.startAdornment || state.filled || state.focused)
          }
        />
      )}
      classes={{
        root: clsx(classes.root, classes.underline),
      }}
    ></InputBase>
  );
};

export default CustomOutlinedComponent;
