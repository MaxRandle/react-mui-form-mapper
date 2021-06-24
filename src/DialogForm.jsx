import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  makeStyles,
} from "@material-ui/core";
import FormBase from "./FormBase";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  input: {
    marginBottom: theme.spacing(1),
  },
}));

const DialogForm = ({
  title,
  fields,
  schema,
  initialValues,
  buttonText,
  onSubmit,
  onClose,
  resetOnSuccess,
  disabledFields,
  buttonless,
  ...rest
}) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  return (
    <FormBase
      inputClassName={classes.input}
      fields={fields}
      initialValues={initialValues}
      schema={schema}
      disabledFields={disabledFields}
      onSubmit={(formData, onSuccess, onFail) => {
        setLoading(true);
        // gives a chance to override any of the callbacks
        onSubmit(
          formData,
          (resData) => {
            onSuccess(resData);
            onClose();
            setLoading(false);
          },
          (errorMessage) => {
            onFail(errorMessage);
            setLoading(false);
          }
        );
      }}
      resetOnSuccess={resetOnSuccess}
      WrapperComponent={({ renderFields, renderButton, renderFeedback }) => (
        <Dialog
          transitionDuration={loading ? 0 : undefined}
          onClose={() => {
            !loading && onClose();
            // onClose();
          }}
          {...rest}
        >
          {title && (
            <>
              <DialogTitle>{title}</DialogTitle>
              <Divider />
            </>
          )}
          <DialogContent>{renderFields}</DialogContent>
          <Divider />
          {renderFeedback}
          <DialogActions>
            <Box style={{ flexGrow: 1 }} /> {renderButton}
          </DialogActions>
        </Dialog>
      )}
      FeedbackComponent={({ message }) => (
        <>
          <DialogContent>
            <DialogContentText>{message}</DialogContentText>
          </DialogContent>
          <Divider />
        </>
      )}
      ButtonComponent={(props) => (
        <Button variant="contained" color="primary" {...props}>
          {buttonText}
        </Button>
      )}
    />
  );
};

export default DialogForm;

DialogForm.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  schema: PropTypes.object.isRequired,
  initialValues: PropTypes.object.isRequired,
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  resetOnSuccess: PropTypes.bool,
  buttonless: PropTypes.bool,
};
