import React, { useState, useCallback, useEffect } from "react";
import Select from "react-select";
import { Wrapper } from "./index.style";
import "./style.css";

const Index = (props) => {
  const {width,paddingX, margin,backgroundColor,setState, setCountryId,errorText,field, placeholder,
    pcolor,
    defaultApiValue
  } = props;
  const country = JSON.parse(localStorage.getItem('countryGlobal'))
  const lang = localStorage.getItem('i18nextLng')
  const [value, setValue] = useState(null);
  console.log(defaultApiValue)
  let options = country?.map((item)=>{return{value: item.id,label:item?.name[lang]}}) || null
  localStorage.setItem('countryOptions', JSON.stringify(options))
  const handleChange = (e) => {
    if(e){
      setValue(e)
      if(setState) setState(prev=>{return{...prev,  country:e?.value, country_name:options.find(a=>a.value === e?.value)}})
      if(setCountryId) setCountryId(e.value)
    }
  }
  useEffect(() =>{
    if(defaultApiValue && defaultApiValue.hasOwnProperty('label')){
      let labelData = ''
      if(lang==='uz') labelData = defaultApiValue?.label?.uz
      if(lang==='en') labelData = defaultApiValue?.label?.en
      if(lang==='ru') labelData = defaultApiValue?.label?.ru
      // console.log(defaultApiValue?.label?.uz)
      let defaultData = {value:defaultApiValue?.value, label:labelData}
      setValue(prev=> prev || defaultData)
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
        placeholder={'Davlatni kiriting'}
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
