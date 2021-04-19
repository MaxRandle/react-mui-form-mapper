import React from "react";

const InputOverride = ({ component: Component, inputRef, ...rest }) => {
  React.useImperativeHandle(inputRef, () => ({
    focus: () => {},
  }));
  return <Component {...rest} />;
};

export default InputOverride;
