import { createValidationFunction } from "../helperFunctions";
import { SelectInput } from "../input_components";

const theme = {
  label: "Theme",
  toString: (data) => data.theme,
  validate: createValidationFunction([
    {
      test: (data) => data.theme !== "",
      feedback: "field is required",
    },
  ]),
  component: SelectInput,
  componentProps: {
    options: [
      { label: "System", value: "system" },
      { label: "Light", value: "light" },
      { label: "Dark", value: "dark" },
    ],
  },
};

const units = {
  label: "Units",
  toString: (data) => data.units,
  validate: createValidationFunction([
    {
      test: (data) => data.units !== "",
      feedback: "field is required",
    },
  ]),
  component: SelectInput,
  componentProps: {
    options: [
      { label: "Metric", value: "metric" },
      { label: "Imperial", value: "imperial" },
    ],
  },
};

export const schema = { theme, units };
