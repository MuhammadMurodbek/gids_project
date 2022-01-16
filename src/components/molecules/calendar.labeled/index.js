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
  const inputSelect = document.querySelector('input')
  // const inputSelects = document.querySelectorAll('input')[4]
  console.log(inputSelect)
  // console.log(inputSelects)
  // inputSelect?.setAttribute('maxlength', 10)
  //   inputSelect?.addEventListener('keyup', function(e){
  //     var v = e.target.value;
  //       if (v.match(/^\d{2}$/) !== null) {
  //           e.target.value = v + '-';
  //       } else if (v.match(/^\d{2}\-\d{2}$/) !== null) {
  //           e.target.value = v + '-';
  //       }
  //   })
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
