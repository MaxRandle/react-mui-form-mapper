import FormSection from "./input_components/FormSection";
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

  ingredientQuantities: {
    displayName: "Ingredients List",
    displayValue: (formData) =>
      formData.ingredients
        .map((ingredient) => `${ingredient.name} ${ingredient.quantity}`)
        .join(", "),
    validationTests: [
      {
        test: (formData) => formData.ingredientQuantities !== [],
        feedback: "must have at least one",
      },
    ],
    inputComponent: RepeatableSectionContainer,
    inputProps: { newChild: { name: "", quantity: "" } },
  },

  costAllocations: {
    displayName: "Cost Allocation",
    displayValue: (formData) =>
      formData.costAllocation
        .map((cost) => `${cost.name} ${cost.amount}`)
        .join(", "),
    inputComponent: RepeatableSectionContainer,
    inputProps: { newChild: { name: "", amount: "" } },
  },
});

// export const createCostAllocationSchema = (params) => ({
// export const createCostAllocationSchema = (params) => ({
//   name: {
//     displayName: "Name",
//     displayValue: (formData) => formData.name,
//     validationTests: [
//       {
//         test: (formData) => formData.name !== "",
//         feedback: "field is required",
//       },
//     ],
//     inputComponent: FreeTextInput,
//     inputProps: {},
//   },

//   amount: {
//     displayName: "Amount",
//     displayValue: (formData) => formData.amount,
//     validationTests: [
//       {
//         test: (formData) => formData.amount !== "",
//         feedback: "field is required",
//       },
//     ],
//     inputComponent: FreeTextInput,
//     inputProps: {},
//   },
// });

export const blankForm = {
  email: "",
  ingredients: [{ name: "", quantity: "" }],
};

export const fieldNames = ["email", "ingredientQuantities"];

const hoursDiff = (date1, date2) => (date1 - date2) / 36e5;

export const costAllocation = {
  displayName: "Cost Allocation",
  toString: (formData) =>
    formData.costAllocation
      .map((cost) => `${cost.name} ${cost.amount}`)
      .join(", "),
  Component: RepeatableSectionContainer,
  // child: []
  inputProps: { newChild: { name: "", amount: "" } },
  validate: (formData) => formData.length > 0,
};

const hourlyJob = {
  displayName: "Hourly Job",
  toString: (data) => JSON.stringify(data),
  Component: FormSection,
  validate: (data) =>
    data.costAllocation.reduce((acc, cur) => acc + cur.amount, 0) ===
    hoursDiff(data.startTime, data.endTime) * data.hourlyRate,
};
