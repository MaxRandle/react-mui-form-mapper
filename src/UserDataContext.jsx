import React, { useState, createContext, useCallback } from "react";

export const UserDataContext = createContext();

const UserDataContextProvider = (props) => {
  const [userData, setUserData] = useState({
    auth: {
      email: "maxrandle95@gmail.com",
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    details: {
      name: "Max Randle",
      avatar: { url: "https://i.imgur.com/m9Hb4F0.jpg" },
      role: "Administrator",
      active: true,
    },
    preferences: {
      theme: "system",
      units: "metric",
    },
  });

  const updateUserAuth = useCallback(
    async (data, onSuccess, onFail) => {
      try {
        console.log(data);
        // make an API call
        const newUserData = {
          ...userData,
          auth: { ...userData.auth, ...data },
        };
        setUserData(newUserData);
        onSuccess(newUserData);
      } catch (error) {
        onFail(error?.message);
      }
    },
    [userData]
  );

  const updateUserDetails = useCallback(
    async (data, onSuccess, onFail) => {
      try {
        console.log(data);
        // make an API call
        const newUserData = {
          ...userData,
          details: { ...userData.details, ...data },
        };
        setUserData(newUserData);
        onSuccess(newUserData);
      } catch (error) {
        onFail(error?.message);
      }
    },
    [userData]
  );

  const updateUserPreferences = useCallback(
    async (data, onSuccess, onFail) => {
      try {
        console.log(data);
        // make an API call
        const newUserData = {
          ...userData,
          preferences: { ...userData.preferences, ...data },
        };

        setUserData(newUserData);
        onSuccess();
      } catch (error) {
        onFail(error?.message);
        console.log(error?.message);
      }
    },
    [userData]
  );

  return (
    <UserDataContext.Provider
      value={{
        userData,
        setUserData,
        updateUserAuth,
        updateUserDetails,
        updateUserPreferences,
      }}
    >
      {props.children}
    </UserDataContext.Provider>
  );
};

export default UserDataContextProvider;
