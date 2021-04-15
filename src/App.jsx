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
import Outline from "./Outline";

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
      {/* <TextField
        label="test"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
      /> */}
      {/* <FormControl variant="outlined">
        <InputLabel htmlFor="component-disabled">label</InputLabel>
        <OutlinedInput id="component-disabled" />
        <FormHelperText>helpet text</FormHelperText>
      </FormControl> */}
      {/* <FormSection
        {...hourlyJob}
        value={formData}
        setValue={setFormData}
        error={error}
        setError={setError}
      /> */}
      {/* <Box className={classes.border} border={1} borderRadius="borderRadius">
        vfdsgdsagdseafdsd
      </Box> */}
      {/* <NotchedOutline label="fdsfd" labelWidth={0} notched>
        dsadsadsads
      </NotchedOutline> */}
      <Outline className={classes.flexColItem} label="label">
        thing thang thong
      </Outline>

      <> </>
      <TextField
        className={classes.flexColItem}
        variant="outlined"
        label="label"
      />
    </Container>
  );
};

export default App;
