import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  /* Styles applied to the root element. */
  root: {
    display: "block",
    transformOrigin: "top left",
  },

  /* Styles applied to the root element if the component is a descendant of `FormControl`. */
  formControl: {
    position: "absolute",
    left: 0,
    top: 0,
    // slight alteration to spec spacing to match visual spec result
    transform: "translate(0, 24px) scale(1)",
  },

  /* Styles applied to the `input` element if `shrink={true}`. */
  shrink: {
    transform: "translate(0, 1.5px) scale(0.75)",
    transformOrigin: "top left",
  },

  /* Styles applied to the root element if `variant="outlined"`. */
  outlined: {
    // see comment above on filled.zIndex
    zIndex: 1,
    pointerEvents: "none",
    transform: "translate(14px, 20px) scale(1)",
    "&$marginDense": {
      transform: "translate(14px, 12px) scale(1)",
    },
    "&$shrink": {
      transform: "translate(14px, -6px) scale(0.75)",
    },
  },
}));

const FormLabel = ({ children, className }) => {
  const classes = useStyles();

  return (
    <label
      className={clsx(
        classes.root,
        classes.formControl,
        classes.shrink,
        classes.outlined,
        className
      )}
    >
      {children}
    </label>
  );
};

export default FormLabel;
