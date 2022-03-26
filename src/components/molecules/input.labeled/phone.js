import React,{useState, useEffect, useCallback} from 'react'
import {Wrapper, Label, Eye} from "./style"
import Input from "../../atom/input.second/phone"
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import {mainGreen} from "../../../styles/global/colors"
import {QuestionCircleOutlined, CheckCircleOutlined} from '@ant-design/icons'
import PhoneInput, {
    formatPhoneNumber,
    formatPhoneNumberIntl,
    isPossiblePhoneNumber,
    isValidPhoneNumber
  } from "react-phone-number-input";
const Index = (props) => {
    
    const {width, label, password, sizeLabel, setState, state, field, defaultApiValue, clear, setClear, idK} = props
    const [phone, setPhone] = useState()
    // console.log(props?.defaultApiValue)
    useEffect(() => {
        if(setState){
            setState({...state, [field]:phone})
        }
    },[phone])
    useEffect(()=>{
        if(defaultApiValue){
            setPhone(defaultApiValue)
        }
    },[])
    return (
        <Wrapper width={width}>
            <Label size={sizeLabel}>{label}</Label>
            <Input onChange={setPhone} value={phone || "+"+defaultApiValue} paddingRight={password ? "45px":null}/>
            <span style={{fontSize:'0.85rem'}}>Raqam mavjudligi (12 ta raqam kitiriting): {(phone || "+"+defaultApiValue) && isPossiblePhoneNumber(phone || "+"+defaultApiValue) ? <CheckCircleOutlined className="success_icon"/> : <QuestionCircleOutlined className="error_icon"/>}</span>
        </Wrapper>
    )
}

export default Index
     