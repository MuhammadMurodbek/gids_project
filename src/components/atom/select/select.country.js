import React, { useState, useCallback, useEffect } from "react";
import Select from "react-select";
import { Wrapper } from "./index.style";
import "./style.css";

const Index = (props) => {
  const {width,paddingX, margin,backgroundColor,setState, setCountryId,errorText,field,
    pcolor,
    defaultApiValue
  } = props;
  const country = JSON.parse(localStorage.getItem('countryGlobal'))
  const lang = localStorage.getItem('i18nextLng')
  const [value, setValue] = useState(null);
  console.log(country)
  let options = country.map((item)=>{return{value: item.id,label:item?.name[lang]}}) || null
  const handleChange = (e) => {
    setValue(e)
    if(setState && field) setState(prev=>{return{...prev, [field]:e}})
    if(setCountryId) setCountryId(e.value)
  }
  useEffect(() =>{
    if(defaultApiValue){
      let defaultData = {value:defaultApiValue?.country, label:defaultApiValue?.country_name[lang]}
      setValue(defaultData)
    }
  },[defaultApiValue])
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
        options={options}
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
