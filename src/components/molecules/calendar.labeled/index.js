import React from "react";
import { Wrapper, Label } from "./style";
import Calendar from "../../atom/calendar";

const Index = (props) => {
  const {
    width,
    label,
    sizeLabel,
    onChange,
    value,
    name,
    placeholder,
    placeholderValue,
    setState, state,
    field,
    errorText
  } = props;
  return (
    <Wrapper width={width}>
      <Label size={sizeLabel}>{label}</Label>
      <Calendar
        {...props}
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        placeholderValue={placeholderValue}
        setState={setState}
        state={state}
        field={field}
        errorText={errorText}
      />
    </Wrapper>
  );
};

export default Index;
