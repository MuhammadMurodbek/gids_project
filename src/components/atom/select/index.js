import React, {useState} from 'react'
import Select from "react-select"
import {Wrapper} from "./index.style"
import "./style.css"
const Index = (props) => {
    const {width, paddingX, margin, backgroundColor, setState} = props
    const [value, setValue] = useState(null)
    const handleChange = (valueChange) => {
        setValue(valueChange)
        if(setState){
            setState(valueChange)
        }
        // console.log(valueChange)
    }
    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' },
    //   ];

    return (
        <Wrapper width={width} paddingX={paddingX} margin={margin} backgroundColor={backgroundColor}>
            <Select 
                {...props }
                value={value}
                onChange={handleChange}   
                menuPortalTarget={document.body} 
                styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }} 
            />            
        </Wrapper>
    )
}

export default Index
