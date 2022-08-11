import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {CheckboxWrapper, Label} from "./style"
import {mainGreen} from "../../../styles/global/colors"
const Index = (props) => {
    const {label, name1, name2, sizeLabel, marginLabel, setState, state, value1, value2, errorText, field, defaultApiValue} = props;
    const [value, setValue] = React.useState(null);
    React.useEffect(() => {
        if(state && field) {
            // let val = state[ field] ? 'yes':'no'
            setValue(state[field])
        }else{
            if(state) setValue('yes')
        }
    },[state, field]);
    React.useEffect(() => {
        // if(defaultApiValue){
            setValue(()=>defaultApiValue)
        // }
    },[defaultApiValue])
    // console.log(value)
    const handleChange = (event) => {
        setValue(event.target.value);
        if(setState) {  
            if(field) {
                setState({...state, [field]:event.target.value})
            }else
                setState({...state, gender:event.target.value})
        }
    }
    // console.log(value)
    return (
        <CheckboxWrapper>
            <Label margin={marginLabel} size={sizeLabel}>{label}</Label>
            <FormControl component="fieldset" className="wrapper-container">
                <RadioGroup  row={true} aria-label="gender" name="gender1" value={value} onChange={handleChange}>

                    <FormControlLabel value={value1 || "gid"} control={<Radio style={{color:mainGreen}} />} label={<span style={{fontSize:'15px'}}>{name1}</span>} className="first"/>

                    <FormControlLabel value={value2 || "translator"} control={<Radio style={{color:mainGreen}}/>} label={<span style={{fontSize:'15px'}}>{name2}</span>} />

                </RadioGroup>
            </FormControl>
            <span style={{position: 'absolute', fontSize:'11px', left:0, bottom:-18,  fontStyle:'italic', color:'red'}}>
                {errorText}
            </span>    
        </CheckboxWrapper>
    )
}

export default Index
