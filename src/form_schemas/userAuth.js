import { createValidationFunction } from "../helperFunctions";
import { FreeTextInput, PasswordInput } from "../input_components";

const email = {
  label: "Email",
  toString: (data) => data.email,
  validate: createValidationFunction([
    {
      test: (data) => data.email !== "",
      feedback: "field is required",
    },
  ]),
  component: FreeTextInput,
  componentProps: { required: true },
};

const password = {
  label: "Current Password",
  toString: (data) => data.password,
  validate: createValidationFunction([
    {
      test: (data) => data.password !== "",
      feedback: "field is required",
    },
  ]),
  component: PasswordInput,
  componentProps: { required: true },
};

const newPassword = {
  label: "New Password",
  toString: (data) => data.newPassword,
  validate: createValidationFunction([
    {
      test: (data) => data.newPassword !== "",
      feedback: "field is required",
    },
    {
      test: (data) => data?.newPassword?.length >= 5,
      feedback: "too short",
    },
    {
      test: (data) => data?.newPassword?.length <= 36,
      feedback: "too long",
    },
    {
      test: (data) => data.newPassword === data.confirmNewPassword,
      feedback: "passwords must match",
    },
  ]),
  component: PasswordInput,
  componentProps: { required: true },
  revalidate: ["confirmNewPassword"],
};

const confirmNewPassword = {
  label: "Confirm New Password",
  toString: (data) => data,
  validate: createValidationFunction([
    {
      test: (data) => data.confirmNewPassword !== "",
      feedback: "field is required",
    },
    {
      test: (data) => data.newPassword === data.confirmNewPassword,
      feedback: "passwords must match",
    },
  ]),
  component: PasswordInput,
  componentProps: { required: true },
  revalidate: ["newPassword"],
};

export const schema = {
  email,
  password,
  newPassword,
  confirmNewPassword,
};
