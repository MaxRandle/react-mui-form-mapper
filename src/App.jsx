import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import { createFormSchema } from "./formSchema";

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

const App = () => {
  const classes = useStyles();
  const formSchema = createFormSchema();
  const fields = ["ingredients"];

  return (
    <Container className={classes.flexColContainer} maxWidth="md">
      {fields.map((field) =>
        formSchema[field].inputComponent({
          key: field,
          className: classes.flexColItem,
          name: field,
          error: true,
          onUpdate: (name, val) => console.log(name, val),
          label: formSchema[field].displayName,
        })
      )}
    </Container>
  );
};

export default App;
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
