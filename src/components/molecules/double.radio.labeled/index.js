import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {CheckboxWrapper, Label} from "./style"
import {mainGreen} from "../../../styles/global/colors"
const Index = (props) => {
    const {label, name1, name2, sizeLabel, marginLabel} = props;
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <CheckboxWrapper>
            <Label margin={marginLabel} size={sizeLabel}>{label}</Label>
            <FormControl component="fieldset" className="wrapper-container">
                <RadioGroup  row={true} aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="gid" control={<Radio style={{color:mainGreen}} />} label={<span style={{fontSize:'15px'}}>{name1}</span>} className="first"/>
                    <FormControlLabel value="translator" control={<Radio style={{color:mainGreen}}/>} label={<span style={{fontSize:'15px'}}>{name2}</span>} />
                </RadioGroup>
            </FormControl>
        </CheckboxWrapper>
    )
}

export default Index