import React from "react";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -10,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
  },
  legendNotched: {
    maxWidth: 1000,
    transition: theme.transitions.create("max-width", {
      duration: 100,
      easing: theme.transitions.easing.easeOut,
      delay: 50,
    }),
  },
  flexColContainer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  flexColItem: {
    marginBottom: theme.spacing(2),
    "&:last-child": {
      marginBottom: theme.spacing(0),
    },
  },
}));

const FieldSet = ({ label, className, ...rest }) => {
  const classes = useStyles();
  return (
    <fieldset
      className={clsx(classes.root, className)}
      classes={{ notchedOutline: null }}
      {...rest}
    >
      <legend className={classes.legendNotched}>{label}</legend>
      <span dangerouslySetInnerHTML={{ __html: "&#8203;" }}></span>
    </fieldset>
  );
};

export default FieldSet;
