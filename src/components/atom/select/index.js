import React, {useState} from 'react'
import Select from "react-select"
import {Wrapper} from "./index.style"
import "./style.css"
const 
Index = (props) => {
    const {width, paddingX, margin, backgroundColor, setState, errorText, setCollect, collect} = props
    const [value, setValue] = useState(null)
    const handleChange = (valueChange) => {
        setValue(valueChange)
        if(setState){
            setState(valueChange)
            // setCollect({
            //     ...collect,
                
            // })
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
            <span style={{position: 'absolute', fontSize:'11px', bottom:-14,  fontStyle:'italic', color:'red'}}>
                {errorText ? '* ' + errorText:null}
            </span>         
        </Wrapper>
    )
}

export default Index
