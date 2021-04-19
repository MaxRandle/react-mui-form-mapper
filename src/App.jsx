import {
  Box,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField,
  Typography,
} from "@material-ui/core";
import NotchedOutline from "@material-ui/core/OutlinedInput/NotchedOutline";
import React, { useState } from "react";
import { blankHourlyJob, hourlyJob } from "./formSchema";
import {
  DateTimeStringInput,
  FormSection,
  FreeTextInput,
  RepeatableFormSection,
} from "./input-components";
import FieldSet from "./FieldSet";
import InputOverride from "./InputOverride";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  border: {
    padding: "18.5px 14px",
  },
  flexColContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(3),
  },
  flexColItem: {
    marginBottom: theme.spacing(3),
  },
  defaultCursor: {
    cursor: "default",
  },
}));

const App = () => {
  const [formData, setFormData] = useState(blankHourlyJob);
  const [error, setError] = useState(true);
  const classes = useStyles();

  return (
    <Container className={classes.flexColContainer} maxWidth="xs">
      <FormSection
        {...hourlyJob}
        value={formData}
        setValue={setFormData}
        error={error}
        setError={setError}
      />

      <TextField
        className={classes.flexColItem}
        variant="outlined"
        label="label"
      />

      {/* <TextField
        className={clsx(classes.flexColItem, classes.defaultCursor)}
        variant="outlined"
        label="label"
        InputLabelProps={{ shrink: true }}
        InputProps={{
          inputComponent: InputOverride,
          inputProps: {
            component: (props) => (
              <div className={classes.defaultCursor} {...props}>
                fds
              </div>
            ),
          },
        }}
      /> */}

      {/* <FieldSet className={classes.flexColItem} label="label" outlined>
        thing thang thong
      </FieldSet> */}
    </Container>
  );
};

export default App;
