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
    
    const {width, label, password, sizeLabel, typeNumber, setState, state, field, defaultApiValue, clear, setClear, idK} = props
    const [check, setCheck] = useState(true)
    const [value, setValue] = useState('')
    const handleChangeOpen = useCallback(() => {
        setCheck(false)
    },[check])
    const handleChangeClose = useCallback(() => {
        setCheck(true)
    },[check])
    const handleChange = useCallback( (e) => {
        console.log(e.target.value)
        setValue(e.target.value)
        if(setState){
            if(idK){
                setState({...state, [field]: e.target.value,  idK: idK})
            }else{
                setState({...state, [field]: e.target.value})
            }
        }
    },[value,state, field, idK])
    useEffect(()=>{
        if(defaultApiValue) {
            setValue(defaultApiValue)
            setState({...state, [field]: defaultApiValue})
        }
    },[defaultApiValue])
    useEffect(()=>{
        if(clear){
            setValue('')
            setClear(false)
        }
    },[clear])
    return (
        <Wrapper width={width}>
            <Label size={sizeLabel}>{label}</Label>
            <Input onChange={handleChange} value={value} {...props} type={typeNumber ? "number" : ((check && password) ? "password":"text")}  paddingRight={password ? "45px":null}/>
            {
                password  ? 
                    <Eye>
                        {
                            !check ? 
                            <RemoveRedEyeOutlinedIcon onClick={handleChangeClose} style={{color:mainGreen}}/>:
                            <VisibilityOffOutlinedIcon onClick={handleChangeOpen} style={{color:mainGreen}}/>
                        }
                    </Eye>
                :
                    null
            }
            <span style={{fontSize:'0.85rem'}}>Raqam mavjudligi (12 ta raqam kitiriting): {value && isPossiblePhoneNumber(value) ? <CheckCircleOutlined className="success_icon"/> : <QuestionCircleOutlined className="error_icon"/>}</span>
            {/* <span style={{position: 'absolute', fontSize:'11px', bottom:-14, left:0, fontStyle:'italic', color:'red'}}>
                {errorText}
            </span> */}
        </Wrapper>
    )
}

export default Index
     