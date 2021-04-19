import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import FormLabel from "./FormLabel";
import LabelledOutline from "./LabelledOutline";

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
      "&:hover $laballedOutline": {
        borderColor: theme.palette.text.primary,
      },
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        "&:hover $laballedOutline": {
          borderColor: borderColor,
        },
      },
      "&$focused $laballedOutline": {
        borderColor: theme.palette.primary.main,
        borderWidth: 2,
      },
      "&$error $laballedOutline": {
        borderColor: theme.palette.error.main,
      },
      "&$disabled $laballedOutline": {
        borderColor: theme.palette.action.disabled,
      },
    },
    laballedOutline: {
      borderColor: borderColor,
    },
  };
});

const FieldSet = ({ label, className, children, outlined, ...rest }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <FormLabel>{label}</FormLabel>
      {children}
      {outlined && (
        <LabelledOutline
          className={clsx(classes.laballedOutline)}
          label={label}
          notched={label ?? false}
        />
      )}
    </div>
  );
};

export default FieldSet;
