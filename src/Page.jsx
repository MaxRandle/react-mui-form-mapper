import { Container, makeStyles, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import ContainerlessForm from "./ContainerlessForm";
import { schema as userPreferencesSchema } from "./form_schemas/userPreferences";
import { schema as userDetailsSchema } from "./form_schemas/userDetails";
import { schema as userAuthSchema } from "./form_schemas/userAuth";
import { UserDataContext } from "./UserDataContext";

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

const Page = () => {
  const classes = useStyles();
  const { userData, updateUserPreferences, updateUserDetails, updateUserAuth } =
    useContext(UserDataContext);

  return (
    <Container className={classes.flexColContainer} maxWidth="sm">
      <Typography className={classes.flexColItem} variant="h3">
        Form Builder Demo
      </Typography>

      <ContainerlessForm
        className={classes.flexColItem}
        title="User Preferences"
        fields={["theme", "units"]}
        schema={userPreferencesSchema}
        initialValues={userData.preferences}
        onSubmit={updateUserPreferences}
        buttonless
      />

      <ContainerlessForm
        className={classes.flexColItem}
        title="User Details"
        fields={["name", "role", "active", "avatar"]}
        schema={userDetailsSchema}
        initialValues={userData.details}
        onSubmit={updateUserDetails}
        buttonText="submit"
      />

      <ContainerlessForm
        className={classes.flexColItem}
        title="User Auth Data"
        fields={["email", "password", "newPassword", "confirmNewPassword"]}
        schema={userAuthSchema}
        initialValues={userData.auth}
        onSubmit={updateUserAuth}
        buttonText="submit"
      />
    </Container>
  );
};

export default Page;
