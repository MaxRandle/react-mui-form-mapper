import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserDataContextProvider from "./UserDataContext";

ReactDOM.render(
  <UserDataContextProvider>
    <App />
  </UserDataContextProvider>,
  document.getElementById("root")
);
