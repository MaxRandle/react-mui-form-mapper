import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  MuiThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import React, { useContext } from "react";
import Page from "./Page";
import { UserDataContext } from "./UserDataContext";

const App = () => {
  const { userData } = useContext(UserDataContext);

  // get theme type
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  let themeType;
  if (userData.preferences.theme === "system") {
    themeType = prefersDarkMode ? "dark" : "light";
  } else {
    themeType = userData.preferences.theme;
  }
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#7e57c2",
      },
      secondary: {
        main: "#ffa000",
      },
      type: themeType,
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Page />
    </MuiThemeProvider>
  );
};

export default App;
