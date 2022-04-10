import React, { useState, useCallback, useEffect } from "react";
import Select from "react-select";
import { Wrapper } from "./index.style";
import "./style.css";
import {CURRENCY_CHECK} from "../../../custom/constants"
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
    clearValue,
    setClearValue,
    pcolor,
    defaultApiValue,
    idK,
    prev,
  } = props;
  const [value, setValue] = useState(null);
  const handleChange = 
    (valueChange) => {
      // console.log(valueChange)
      setValue(valueChange);
      setCollect({idK:idK, value:valueChange, field:[field]})
    //   if (setState) {
    //     setState(valueChange);
    //   }
    //   if (setCollect) {
    //     if(idK){
    //       setCollect((prev) => {
    //         return { ...prev, [field]: valueChange, idK: idK};
    //       });
    //     }else{
    //       setCollect((prev) => {
    //         return { ...prev, [field]: valueChange };
    //       });
    //     }
    //   } ///important
    //   if(setClearValue){
    //     setClearValue(false);
    //   }
    }
    useEffect(() => {
      if(clearValue){
        setValue(null)
      }
    },[clearValue])
    useEffect(() => {
      if(field && field === 'work_time_per_day'){
        if(prev?.hasOwnProperty('value'))
          setValue(prev)
        else
          setValue({value:prev,label:prev})
      }else{
        if(prev?.hasOwnProperty('value')){ 
          setValue(prev)
        }else{
          setValue({value:prev,label:CURRENCY_CHECK[prev]})
        }
      }
    },[prev, field])
    
  return (
    <Wrapper
      width={width}
      paddingX={paddingX}
      margin={margin}
      backgroundColor={backgroundColor}
      pcolor={pcolor}
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
