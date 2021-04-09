import { Container, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  flexColContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(3),
  },
  flexColItem: {
    marginBottom: theme.spacing(3),
  },
}));

const FormBase = (props) => {
  const { initialData, formSchema, fieldNames, ...rest } = props;
  const classes = useStyles();
  const [formData, setFormData] = useState(initialData);
  const [allowError, setAllowError] = useState(fieldNames);

  const handleUpdate = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
    setAllowError({ ...allowError, [fieldName]: true });
  };

  return (
    <Container {...rest} className={classes.flexColContainer} maxWidth="md">
      {fieldNames.map((fieldName) => {
        let helperText;

        const error = formSchema[fieldName].validationTests.some(
          ({ test, feedback }) => {
            const pass = test(formData);
            if (!pass) {
              helperText = feedback;
            }
            return !pass;
          }
        );

        return formSchema[fieldName].inputComponent({
          key: fieldName,
          className: classes.flexColItem,
          name: fieldName,
          label: formSchema[fieldName].displayName,
          value: formData[fieldName],
          onUpdate: handleUpdate,
          error: error && allowError[fieldName],
          helperText: allowError[fieldName] && error && helperText,
        });
      })}
    </Container>
  );
};

export default FormBase;
// {formSchema.ingredients.inputComponent({
//   className: classes.flexColItem,
//   name: "ingredients",
//   value: [],
//   onUpdate: (v) => console.log(v),
//   // error: true,
// })}

// {columns.map((col) =>
//   entityDefinition[col].inputComponent({
//     key: col,
//     className: classes.flexColItem,
//     name: col,
//     label: entityDefinition[col].displayName,
//     value: formData[col],
//     onUpdate: handleChange,
//     error: !entityDefinition[col].isValid(formData),
//     // fullWidth: true,
//     InputLabelProps: {
//       shrink: true,
//     },
//     disabled: disabledColumns.includes(col),
//   })
// )}
