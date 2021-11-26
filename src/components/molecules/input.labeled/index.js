import React,{useState, useEffect, useCallback} from 'react'
import {Wrapper, Label, Eye} from "./style"
import Input from "../../atom/input.second"
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import {mainGreen} from "../../../styles/global/colors"
const Index = (props) => {
    
    const {width, label, password, sizeLabel, typeNumber, setState, state, field, defaultApiValue} = props
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
            setState({...state, [field]: e.target.value})
        }
    },[value,state])
    useEffect(()=>{
        if(defaultApiValue) {
            setValue(defaultApiValue)
        }
    },[defaultApiValue])
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
            {/* <span style={{position: 'absolute', fontSize:'11px', bottom:-14, left:0, fontStyle:'italic', color:'red'}}>
                {errorText}
            </span> */}
        </Wrapper>
    )
}

export default Index
     