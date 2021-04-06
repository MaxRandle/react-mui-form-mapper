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

  const handleUpdate = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  return (
    <Container {...rest} className={classes.flexColContainer} maxWidth="md">
      {fieldNames.map((fieldName) =>
        formSchema[fieldName].inputComponent({
          key: fieldName,
          className: classes.flexColItem,
          name: fieldName,
          error: true,
          onUpdate: handleUpdate,
          label: formSchema[fieldName].displayName,
          value: formData[fieldName],
        })
      )}
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
