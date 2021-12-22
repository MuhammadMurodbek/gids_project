import React from 'react'
import { Input,InputWrapper } from './style'
import "react-phone-number-input/style.css";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isPossiblePhoneNumber,
  isValidPhoneNumber
} from "react-phone-number-input";
const Index = (props) => {
    const {errorText} = props;
    const [state, setState] = React.useState()
    return (
        <InputWrapper>
            <PhoneInput
                international
                placeholder="Enter phone number"
                value={state}
                maxLength={17}
                onChange={setState}
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
            Is possible: {state && isPossiblePhoneNumber(state) ? "true" : "false"}
            {/* <Input {...props}/>
            <span style={{position: 'absolute', fontSize:'11px', left:0, bottom:-18,  fontStyle:'italic', color:'red'}}>
                {errorText}
            </span>  */}
        </InputWrapper>
    )
}

export default Index