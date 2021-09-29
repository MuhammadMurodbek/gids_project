import React,{useState} from 'react'
import {Wrapper, Label, Eye} from "./style"
import Input from "../../atom/input.second"

const Index = (props) => {
    const {width, label, password} = props
    const [check, setCheck] = useState(true)
    const handleChangeOpen = () => {
        setCheck(false)
    }
    const handleChangeClose = () => {
        setCheck(true)
    }
    return (
        <Wrapper width={width}>
            <Label>{label}</Label>
            <Input {...props} type={(check && password) ? "password":"text"} label="asdfdsf" paddingRight={password ? "45px":null}/>
            {
                password  ? 
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
        </Wrapper>
    )
}

export default Index
     