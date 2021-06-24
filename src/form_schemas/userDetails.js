import { createValidationFunction } from "../helperFunctions";
import {
  FreeTextInput,
  SelectInput,
  SwitchInput,
  ImageUploadComponent,
} from "../input_components";

const name = {
  label: "Name",
  toString: (data) => data.name,
  validate: createValidationFunction([
    {
      test: (data) => data.name !== "",
      feedback: "field is required",
    },
    {
      test: (data) => data.name.length <= 100,
      feedback: "too long",
    },
  ]),
  component: FreeTextInput,
  componentProps: { required: true },
};

const role = {
  label: "Role",
  toString: (data) => data.role,
  validate: createValidationFunction([
    {
      test: (data) => data.role !== "",
      feedback: "field is required",
    },
  ]),
  component: SelectInput,
  componentProps: {
    required: true,
    options: [
      { label: "Reader", value: "Reader" },
      { label: "Contributor", value: "Contributor" },
      { label: "Editor", value: "Editor" },
      { label: "Administrator", value: "Administrator" },
    ],
  },
};

const active = {
  label: "Active",
  toString: (data) => (data.active ? "True" : "False"),
  validate: createValidationFunction([]),
  component: SwitchInput,
};

const avatar = {
  label: "Avatar",
  toString: (data) => JSON.stringify(data.avatar),
  validate: createValidationFunction([]),
  component: ImageUploadComponent,
};

export const schema = {
  name,
  role,
  active,
  avatar,
};
