import React,{useState} from 'react'
import {Wrapper, Label, Eye} from "./style"
import Input from "../../atom/input.second"
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import {mainGreen} from "../../../styles/global/colors"
const Index = (props) => {
    const {width, label, password, sizeLabel} = props
    const [check, setCheck] = useState(true)
    const handleChangeOpen = () => {
        setCheck(false)
    }
    const handleChangeClose = () => {
        setCheck(true)
    }
    return (
        <Wrapper width={width}>
            <Label size={sizeLabel}>{label}</Label>
            <Input {...props} type={(check && password) ? "password":"text"} label="asdfdsf" paddingRight={password ? "45px":null}/>
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
        </Wrapper>
    )
}

export default Index
     