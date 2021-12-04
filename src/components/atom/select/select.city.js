import React, { useState, useCallback, useEffect } from "react";
import Select from "react-select";
import { Wrapper } from "./index.style";
import "./style.css";

const Index = (props) => {
  const {width,paddingX, margin,backgroundColor,setState,countryId, state,errorText,setCollect,collect,field,clearValue,setClearValue,
    pcolor,
    defaultApiValue
  } = props;
  const country = JSON.parse(localStorage.getItem('countryGlobal'))
  const lang = localStorage.getItem('i18nextLng')
  const [value, setValue] = useState(null);
  let citiesValue = country.find(prev=>prev.id === countryId) || null
  let options = citiesValue?.cities?.map((val,index)=>{
    return{
        value:index+1,
        label:val[lang]
    }
  })||null
  // console.log(country)
  console.log(citiesValue)
  console.log(options)
  const handleChange = (e) => {
    setValue(e)
    if(setState && field) setState(prev=>{return{...prev, [field]:e}})
  }
  useEffect(() =>{
    if(defaultApiValue){
      let defaultData = {value:defaultApiValue?.city, label:defaultApiValue?.city_name[lang]}
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
