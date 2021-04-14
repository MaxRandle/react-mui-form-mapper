import {
  DateTimeStringInput,
  FormSection,
  FreeTextInput,
  RepeatableFormSection,
} from "./input-components";

const hoursDiff = (dateString1, dateString2) =>
  (new Date(dateString1) - new Date(dateString2)) / 36e5;

const name = {
  label: "Name",
  toString: (data) => data,
  Component: FreeTextInput,
  validate: (data) => data !== "",
};

const amount = {
  label: "Amount",
  toString: (data) => data,
  Component: FreeTextInput,
  validate: (data) => data !== "",
};

const costAllocation = {
  label: "Cost Allocation",
  toString: (data) =>
    `${name.toString(data.name)} ${amount.toString(data.amount)}`,
  Component: FormSection,
  validate: (data) => true,
  children: {
    name,
    amount,
  },
};

const costAllocationArray = {
  label: "Cost Allocation List",
  toString: (data) =>
    data.map((child) => costAllocation.toString(child)).join(", "),
  Component: RepeatableFormSection,
  validate: (data) => data.length > 0,
  child: costAllocation,
  blankNewChild: { name: "", amount: "" }, // will rethink this in future
};

const startDateTimeString = {
  label: "Start Time",
  toString: (data) => data,
  Component: DateTimeStringInput,
  validate: (data) => data !== "",
};

const endDateTimeString = {
  label: "Start Time",
  toString: (data) => data,
  Component: DateTimeStringInput,
  validate: (data) => data !== "",
};

const hourlyRate = {
  label: "Hourly Rate",
  toString: (data) => data,
  Component: FreeTextInput,
  validate: (data) => data !== "",
};

export const hourlyJob = {
  label: "Hourly Job",
  toString: (data) => JSON.stringify(data),
  Component: FormSection,
  validate: (data) =>
    data.costAllocationArray.reduce((acc, cur) => acc + cur.amount, 0) ===
    hoursDiff(data.startDateTimeString, data.endDateTimeString) *
      data.hourlyRate,
  children: {
    startDateTimeString,
    endDateTimeString,
    hourlyRate,
    costAllocationArray,
  },
};

export const blankHourlyJob = {
  startDateTimeString: "",
  endDateTimeString: "",
  hourlyRate: "",
  costAllocationArray: [{ name: "", amount: "" }],
};
