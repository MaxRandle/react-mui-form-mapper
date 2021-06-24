export const uniqueArray = (ar) => ar.filter((v, i, a) => a.indexOf(v) === i);

export const createValidationFunction = (validationTests) => (data) => {
  // accept an array of validation tests and bundle them into a single function call
  // returns true if all tests pass
  // or the feedback from the first test that fails
  let failFeedback;
  const passAll = !validationTests.some(({ test, feedback }) => {
    const pass = test(data);
    if (!pass) {
      failFeedback = feedback;
      return true;
    }
    return false;
  });
  return passAll || failFeedback;
};
