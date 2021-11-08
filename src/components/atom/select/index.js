import React, { useState, useCallback } from "react";
import Select from "react-select";
import { Wrapper } from "./index.style";
import "./style.css";

const Index = (props) => {
  const {
    width,
    paddingX,
    margin,
    backgroundColor,
    setState,
    state,
    errorText,
    setCollect,
    collect,
    field,
  } = props;
  const [value, setValue] = useState(null);
  const handleChange = useCallback(
    (valueChange) => {
      setValue(valueChange);
      if (setState) {
        setState(valueChange);
      }
      if (setCollect) {
        setCollect((prev) => {
          return { ...prev, [field]: valueChange };
        });
      } ///important
    },
    [state, value, collect]
  );

  return (
    <Wrapper
      width={width}
      paddingX={paddingX}
      margin={margin}
      backgroundColor={backgroundColor}
    >
      <Select
        {...props}
        value={value}
        onChange={handleChange}
        menuPortalTarget={document.body}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
      />
      <span
        style={{
          position: "absolute",
          fontSize: "11px",
          left: 0,
          bottom: -18,
          fontStyle: "italic",
          color: "red",
        }}
      >
        {errorText}
      </span>
    </Wrapper>
  );
};

export default Index;
