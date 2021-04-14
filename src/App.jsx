import {
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { blankHourlyJob, hourlyJob } from "./formSchema";
import {
  DateTimeStringInput,
  FormSection,
  FreeTextInput,
  RepeatableFormSection,
} from "./input-components";

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
  const [formData, setFormData] = useState(blankHourlyJob);
  const [error, setError] = useState(false);

  return (
    <>
      {/* <FormBase
        formSchema={formSchema}
        fieldNames={fieldNames}
        initialData={blankForm}
      /> */}

      {/* <FormSection /> */}

      <FormSection
        {...hourlyJob}
        value={formData}
        setValue={setFormData}
        error={error}
        setError={setError}
      />
    </>
  );
};

export default App;
