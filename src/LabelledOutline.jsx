import React from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
  },
  /* Styles applied to the legend element. */
  legendLabelled: {
    display: "block",
    width: "auto",
    textAlign: "left",
    padding: 0,
    height: 11,
    // sync with `lineHeight` in `legend` styles
    fontSize: "0.75em",
    visibility: "hidden",
    maxWidth: 0.01,
    transition: theme.transitions.create("max-width", {
      duration: 50,
      easing: theme.transitions.easing.easeOut,
    }),
    "& > span": {
      paddingLeft: 5,
      paddingRight: 5,
      display: "inline-block",
    },
  },
  /* Styles applied to the legend element is notched. */
  legendNotched: {
    maxWidth: 1000,
    transition: theme.transitions.create("max-width", {
      duration: 100,
      easing: theme.transitions.easing.easeOut,
      delay: 50,
    }),
  },
}));

const LabelledOutline = ({ label, className, notched, ...rest }) => {
  const classes = useStyles();

  const labelWidth = 0;
  return (
    <fieldset
      className={clsx(classes.root, className)}
      classes={{ notchedOutline: null }}
      {...rest}
    >
      <legend
        className={clsx(
          classes.legendLabelled,
          notched && classes.legendNotched
        )}
        // style={{ width: 0.01 }}
      >
        {label}
      </legend>
      <span dangerouslySetInnerHTML={{ __html: "&#8203;" }}></span>
    </fieldset>
  );
};

export default LabelledOutline;
