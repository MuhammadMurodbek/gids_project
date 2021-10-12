import React,{useState} from 'react'
import {Input, InputWrapper, InputLabel, Eye} from "./index.style"
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import TextInput from "../../atom/auth.input"
import {mainGreen} from "../../../styles/global/colors"

const Index = (props) => {
    const [check, setCheck] = useState(true)
    const handleChangeOpen = () => {
        setCheck(false)
    }
    const handleChangeClose = () => {
        setCheck(true)
    }
    return (
        <InputWrapper className="wrapper-input" width={props.width} margin={props.margin}>  
            <InputLabel className="label-input">{props.title}</InputLabel>
            <TextInput className="input-inner" type={(check && props.password) ? "password":"text"} label="asdfdsf" {...props}/>
            {/* <Input className="input-inner" type={(check && props.password) ? "password":"text"} label="asdfdsf" {...props} /> */}
            {
                props.password  ? 
                    <Eye>
                        {
                            !check ? 
                            <RemoveRedEyeOutlinedIcon onClick={handleChangeClose} style={{color:mainGreen}}/>
                            :
                            <VisibilityOffOutlinedIcon onClick={handleChangeOpen} style={{color:mainGreen}}/>
                        }
                    </Eye>
                :
                    null
            }
            
        </InputWrapper>
    )
}

export default Index
