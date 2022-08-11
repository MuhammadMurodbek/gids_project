import React,{useState, useEffect} from 'react'
import {Wrapper, Label} from "./style"
import Input from "../../atom/input.second"
const Index = (props) => {
    
    const {log, width, label, password, sizeLabel, setState, state, field, defaultApiValue} = props
    const [phone, setPhone] = useState('')
    useEffect(() => {
        if(setState){
            setState({...state, [field]:phone})
        }
    },[phone, field, defaultApiValue])
    useEffect(()=>{
        if(defaultApiValue){
            // if(field === 'website') defaultApiValue.substr(0,8)
            setPhone(defaultApiValue)
        }
    },[defaultApiValue])
    const handleChange = (e) => {
        setPhone(e.target.value)
    }
    return (
        <Wrapper width={width}>
            <Label size={sizeLabel}>{label}</Label>
            <div className="log_wrap">
                <div className="log_wrap_item">{log}</div>
                <Input grow={1} width="100%" onChange={handleChange} value={phone}/>
            </div>
            {/* <span style={{fontSize:'0.85rem'}}>Raqam mavjudligi (12 ta raqam kitiriting): {(phone || "+"+defaultApiValue) && isPossiblePhoneNumber(phone || "+"+defaultApiValue) ? <CheckCircleOutlined className="success_icon"/> : <QuestionCircleOutlined className="error_icon"/>}</span> */}
        </Wrapper>
    )
}

export default Index
     