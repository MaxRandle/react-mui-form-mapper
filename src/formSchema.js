import FreeTextInput from "./input_components/FreeTextInput";
import RepeatableSection from "./input_components/RepeatableSection";

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
    inputComponent: RepeatableSection,
    inputProps: {},
  },
});
