import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import FieldSet from "./FieldSet";

const useStyles = makeStyles((theme) => {
  var borderColor =
    theme.palette.type === "light"
      ? "rgba(0, 0, 0, 0.23)"
      : "rgba(255, 255, 255, 0.23)";
  return {
    root: {
      padding: "18.5px 14px",
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
  };
});

const Outline = ({ label, className, children, ...rest }) => {
  const classes = useStyles();
  return (
    <span className={clsx(classes.root, className)} {...rest}>
      {children}
      <FieldSet label={label} />
    </span>
  );
};

export default Outline;
