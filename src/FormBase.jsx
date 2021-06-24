import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {Array<String>} fields array of the field names to be rendered.
 * @param {Array<String>} disabledFields subset of fields containing field names to render as disabled.
 * @param {Object} initialValues the initial value of the form fields.
 * @param {Object} schema describes how each field behaves.
 * @param {String} inputClassName class name to be applied to each input component.
 * @param {React.Component} WrapperComponent component that will act as the form contents.
 * @param {React.Component} ButtonComponent component that render the submit button.
 * @param {React.Component} FeedbackComponent component that displays feedback.
 * @param {Function} onSubmit function that accepts the formValues and two callbacks as arguments.
 * @param {Boolean} resetOnSuccess if true, form values will reset to initial values when onSuccess is called.
 * @param {Boolean} buttonless if true, no button will be rendered and instead any value change will submit.
 *
 */

const FormBase = ({
  fields,
  disabledFields,
  initialValues,
  schema,
  inputClassName,
  WrapperComponent,
  ButtonComponent,
  FeedbackComponent,
  onSubmit,
  resetOnSuccess,
  buttonless,
}) => {
  // init state
  const [formValues, setFormValues] = useState(
    fields.reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: initialValues[cur],
      }),
      {}
    )
  );
  const [formErrors, setFormErrors] = useState(
    fields.reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: schema[cur].validate(initialValues) === true ? false : true,
      }),
      {}
    )
  );
  const [formHelpers, setFormHelpers] = useState(
    fields.reduce(
      (acc, cur) => ({
        ...acc,
        [cur]:
          schema[cur].validate(initialValues) === true
            ? ""
            : schema[cur].validate(initialValues),
      }),
      {}
    )
  );
  const [feedback, setFeedback] = useState();
  const [loading, setLoading] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  // keep track of which fields the user has touched so that we can avoid
  // displaying error={true} before the user has a chance to interract with it.
  const [allowError, setAllowError] = useState(
    fields.reduce((acc, cur) => ({ ...acc, [cur]: false }), {})
  );

  const handleValueChange = (fieldName, fieldValue) => {
    // first time a field value is changed, allow submitting
    setFirstRender(false);
    // first time a field value changes it will be allowed to be errored
    setAllowError({ ...allowError, [fieldName]: true });
    // update form values
    const newFormValues = { ...formValues, [fieldName]: fieldValue };
    setFormValues(newFormValues);

    // validate appropriate fields
    const fieldsToValidate = [fieldName];
    // if there are fields that must be revalidated when this one updates
    if (schema[fieldName].revalidate) {
      fieldsToValidate.push(...schema[fieldName].revalidate);
    }
    const newFormErrors = {};
    const newFormHelpers = {};
    fieldsToValidate.forEach((currentField) => {
      const isValid = schema[currentField].validate(newFormValues);
      if (isValid === true) {
        newFormErrors[currentField] = false;
        newFormHelpers[currentField] = "";
      } else {
        newFormErrors[currentField] = true;
        newFormHelpers[currentField] = isValid;
      }
    });
    // update form errors and form helpers
    setFormErrors({ ...formErrors, ...newFormErrors });
    setFormHelpers({ ...formHelpers, ...newFormHelpers });
  };

  // used to check if the component is mounted so that the callbacks dont try to update state while unmounted
  const componentIsMounted = useRef(true);
  useEffect(() => () => (componentIsMounted.current = false), []);

  const handleSubmit = useCallback(() => {
    setFirstRender(true);
    setLoading(true);
    setFeedback();
    onSubmit(
      formValues,
      // onSuccess callback
      (resData) => {
        if (componentIsMounted.current) {
          setLoading(false);
          setFeedback();
          resetOnSuccess && setFormValues(initialValues);
        }
      },
      // onFail callback
      (feedback) => {
        if (componentIsMounted.current) {
          setLoading(false);
          setFeedback(feedback);
        }
      }
    );
  }, [formValues, initialValues, onSubmit, resetOnSuccess]);

  useEffect(() => {
    // submit on value change if buttonless && no errors
    if (
      !firstRender &&
      buttonless &&
      !Object.values(formErrors).includes(true)
    ) {
      handleSubmit();
    }
  }, [buttonless, firstRender, formErrors, formValues, handleSubmit]);

  return (
    <WrapperComponent
      renderFields={fields.map((fieldName) => {
        // render the component and pass all the props
        return schema[fieldName].component({
          key: fieldName,
          className: inputClassName,
          label: schema[fieldName].label,
          value: formValues[fieldName],
          setValue: (fieldValue) => handleValueChange(fieldName, fieldValue),
          error: allowError[fieldName] && formErrors[fieldName],
          helperText: allowError[fieldName] && formHelpers[fieldName],
          disabled: loading || disabledFields.includes(fieldName),
          ...schema[fieldName].componentProps,
        });
      })}
      renderButton={
        !buttonless && (
          <ButtonComponent
            disabled={loading || Object.values(formErrors).includes(true)}
            onClick={handleSubmit}
          />
        )
      }
      renderFeedback={feedback && <FeedbackComponent message={feedback} />}
    />
  );
};

FormBase.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabledFields: PropTypes.arrayOf(PropTypes.string),
  initialValues: PropTypes.object.isRequired,
  schema: PropTypes.object.isRequired,
  inputClassName: PropTypes.string,
  WrapperComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    .isRequired,
  ButtonComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    .isRequired,
  FeedbackComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    .isRequired,
  onSubmit: PropTypes.func.isRequired,
  resetOnSuccess: PropTypes.bool,
  buttonless: PropTypes.bool,
};

FormBase.defaultProps = {
  disabledFields: [],
};

export default FormBase;
