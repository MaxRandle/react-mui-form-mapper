import FreeTextInput from "./input_components/FreeTextInput";
import RepeatableSectionContainer from "./input_components/RepeatableSectionContainer";

export const createFormSchema = (params) => ({
  email: {
    displayName: "Email",
    displayValue: (formData) => formData.email,
    inputComponent: FreeTextInput,
    validationTests: [
      {
        test: (formData) => formData.email !== "",
        feedback: "field is required",
      },
    ],
    inputProps: {},
  },

  ingredients: {
    displayName: "Ingredients List",
    displayValue: (formData) =>
      formData.ingredients
        .map((ingredient) => `${ingredient.name} ${ingredient.quantity}`)
        .join(", "),
    inputComponent: RepeatableSectionContainer,
    inputProps: {},
  },
});

export const blankForm = {
  email: "",
  ingredients: [
    { name: "", quantity: "" },
    { name: "", quantity: "" },
    { name: "", quantity: "" },
    { name: "", quantity: "" },
  ],
};

export const fieldNames = ["email", "ingredients"];
