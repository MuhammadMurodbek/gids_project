import React from 'react'
import { Input,InputWrapper } from './style'
import "react-phone-number-input/style.css";
import {QuestionCircleOutlined, CheckCircleOutlined} from '@ant-design/icons'
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isPossiblePhoneNumber,
  isValidPhoneNumber
} from "react-phone-number-input";
const Index = (props) => {
    // const {errorText} = props;
    const {state, setState, value, onChange} = props;
    return (
        <InputWrapper>
            <PhoneInput
                {...props}
                international
                placeholder="Enter phone number"
                value={value}
                maxLength={17}
                onChange={onChange}
                style={{border:'none'}}
                error={
                state
                    ? isValidPhoneNumber(state)
                    ? undefined
                    : "Invalid phone number"
                    : "Phone number required"
                }
                className='input_phone'
            />
            {/* <span style={{fontSize:'0.85rem'}}>Raqam mavjudligi (12 ta raqam kitiriting): {state && isPossiblePhoneNumber(state) ? <CheckCircleOutlined className="success_icon"/> : <QuestionCircleOutlined className="error_icon"/>}</span> */}
            
            {/* <Input {...props}/>
            <span style={{position: 'absolute', fontSize:'11px', left:0, bottom:-18,  fontStyle:'italic', color:'red'}}>
                {errorText}
            </span>  */}
        </InputWrapper>
    )
}

export default Index