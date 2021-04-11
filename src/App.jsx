import {
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import FormBase from "./FormBase";
import { createFormSchema, blankForm, fieldNames } from "./formSchema";
import FormSection from "./input_components/FormSection";

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
  const formSchema = createFormSchema();
  return (
    <>
      {/* <FormBase
        formSchema={formSchema}
        fieldNames={fieldNames}
        initialData={blankForm}
      /> */}

      <FormSection Child />
    </>
  );
};

export default App;
