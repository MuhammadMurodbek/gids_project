import React, {useState} from 'react'
import {Wrapper, Label} from './style'
// import Select from "../../atom/select"
import TextArea from "../../atom/textAreaCom"
const Index = (props) => {
    const [value, setValue] = useState(null)
    const {width, label, setState, field, name} = props
    const handleChange = (e) => {
      setValue(e.target.value)
      if(setState) {
        setState(prev=>{return{...prev, [field]:e.target.value}})
    }
    }
    return (
        <Wrapper width={width}>
            <Label>{label}</Label>
            <TextArea {...props} rows="10" value={value} name={name} onChange={handleChange} />
        </Wrapper>
    )
}

export default Index
