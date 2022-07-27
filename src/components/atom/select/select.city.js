import React, { useState, useEffect } from "react";
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
  let citiesValue = country?.find(prev=>prev.id === countryId) || null
  let options = citiesValue?.cities?.map((val)=>{
    return{
        value:val?.id,
        label:val[lang]
    }
  })||null
  localStorage.setItem('cityOptions', JSON.stringify(options))
  const handleChange = (e) => {
    setValue(()=>e)
    if(setState) setState(prev=>{return{...prev, city:e?.value, city_name:options.find(a=>a.value === e?.value)}})
  }
  useEffect(()=>{
    if(clearValue){
      setValue('')
      setClearValue(false)
    }
  },[clearValue])
  useEffect(() =>{
    if(defaultApiValue){
      let labelData = ''
      if(lang==='uz') labelData = defaultApiValue?.label?.uz
      if(lang==='en') labelData = defaultApiValue?.label?.en
      if(lang==='ru') labelData = defaultApiValue?.label?.ru
      let defaultData = {value:defaultApiValue?.value, label:labelData}
      setValue( prev=>prev || defaultData)
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
        value={options?.length>0 ? value:''}
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
