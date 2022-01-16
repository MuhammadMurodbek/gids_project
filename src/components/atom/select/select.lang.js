import React, { useState } from "react";
import Select from "react-select";
import { Wrapper } from "./index.style";
import "./style.css";

const Index = (props) => {
  const {width,paddingX, margin,backgroundColor,setState,field,errorText, disableMulti, setClear, clear, defaultApiValue} = props;
  const languages = JSON.parse(localStorage.getItem('lanGlobal'))
  const lang = localStorage.getItem('i18nextLng')
  const [value, setValue] = useState(null);
//   let citiesValue = country.find(prev=>prev.id === countryId) || null
  let options = languages?.map((val)=>{
    return{
        value:val.id,
        label:val?.name[lang]
    }
  })||null
  localStorage.setItem('lanOptions', JSON.stringify(options))
  // console.log(country)
  // console.log(citiesValue)
//   console.log(options)
  const handleChange = (e) => {
    console.log(e)
    setValue(e)
    if(setState){
      if(field){
        setState(prev=>{return{...prev, [field]:e}}) 
      }else
        setState(prev=>{return{...prev, languages:e}})
    }
  }
  React.useEffect(()=>{
    if(clear){
      setValue(null)
      setClear(false)
    }
  },[clear])
  React.useEffect(()=>{
    if(defaultApiValue){
      setValue(defaultApiValue)
      if(setState){
        if(field){
          setState(prev=>{return{...prev, [field]:defaultApiValue}}) 
        }else
          setState(prev=>{return{...prev, languages:defaultApiValue}})
      }
    }
  },[defaultApiValue])
  // console.log(value)
  // console.log(state)
//   useEffect(() =>{
//     // console.log('merge')
//     if(defaultApiValue){
//       let labelData = ''
//       if(lang==='uz') labelData = defaultApiValue?.label?.uz
//       if(lang==='en') labelData = defaultApiValue?.label?.en
//       if(lang==='ru') labelData = defaultApiValue?.label?.ru
//       let defaultData = {value:defaultApiValue?.value, label:labelData}
//       setValue( prev=>prev || defaultData)
//     }
//   },[defaultApiValue])
  return (
    <Wrapper
      width={width}
      paddingX={paddingX}
      margin={margin}
      backgroundColor={backgroundColor}
    >
      <Select
        isMulti={disableMulti ? false : true}
        {...props}
        value={value}
        options={options}
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
