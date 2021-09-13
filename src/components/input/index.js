import React,{useState} from 'react'
import {Input, InputWrapper, InputLabel, Eye} from "./index.style"

const Index = (props) => {
    const [check, setCheck] = useState(true)
    const handleChangeOpen = () => {
        setCheck(false)
    }
    const handleChangeClose = () => {
        setCheck(true)
    }
    return (
        <InputWrapper className="wrapper-input" width={props.width}>  
            <InputLabel className="label-input">{props.title}</InputLabel>
            <Input className="input-inner" type={(check && props.password) ? "password":"text"} label="asdfdsf" {...props} />
            {
                props.password  ? 
                    <Eye>
                        {
                            !check ? 
                            <i className="far fa-eye" onClick={handleChangeClose}></i>:
                            <i className="far fa-eye-slash" onClick={handleChangeOpen}></i>
                        }
                    </Eye>
                :
                    null
            }
            
        </InputWrapper>
    )
}

export default Index
