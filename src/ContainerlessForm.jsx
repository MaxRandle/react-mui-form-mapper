import React from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import FormBase from "./FormBase";
import PropTypes from "prop-types";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  flexColContainer: {
    display: "flex",
    flexDirection: "column",
  },
  flexColItem: {
    margin: theme.spacing(0, 0, 2, 0),
  },
  inputClassName: {
    margin: theme.spacing(0, 0, 2, 0),
  },
}));

const ContainerlessForm = ({
  title,
  fields,
  schema,
  initialValues,
  buttonText,
  onSubmit,
  className,
  resetOnSuccess,
  buttonless,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <FormBase
      inputClassName={classes.inputClassName}
      fields={fields}
      initialValues={initialValues}
      schema={schema}
      onSubmit={(formData, onSuccess, onFail) => {
        // gives an option to override any of the callbacks
        onSubmit(formData, onSuccess, onFail);
      }}
      resetOnSuccess={resetOnSuccess}
      buttonless={buttonless}
      WrapperComponent={({ renderFields, renderButton, renderFeedback }) => (
        <Box className={clsx(classes.flexColContainer, className)} {...rest}>
          {title && (
            <Typography className={classes.flexColItem} variant="h5">
              {title}
            </Typography>
          )}
          {renderFields}
          {renderFeedback}
          {renderButton}
        </Box>
      )}
      FeedbackComponent={({ message }) => (
        <Typography className={classes.flexColItem}>{message}</Typography>
      )}
      ButtonComponent={(props) => (
        <Button variant="contained" color="primary" {...props}>
          {buttonText}
        </Button>
      )}
    />
  );
};

export default ContainerlessForm;

ContainerlessForm.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  schema: PropTypes.object.isRequired,
  initialValues: PropTypes.object.isRequired,
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  resetOnSuccess: PropTypes.bool,
  buttonless: PropTypes.bool,
};
