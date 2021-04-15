import {
  Container,
  makeStyles,
  OutlinedInput,
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
  const [error, setError] = useState(true);
  const classes = useStyles();

  return (
    <Container className={classes.flexColContainer} maxWidth="xs">
      {/* <TextField InputProps={{ inputComponent: OutlinedInput }} /> */}

      {/* <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label="Name" />
      </FormControl> */}

      {/* <FormSection
        {...hourlyJob}
        value={formData}
        setValue={setFormData}
        error={error}
        setError={setError}
      /> */}
    </Container>
  );
};

export default App;
