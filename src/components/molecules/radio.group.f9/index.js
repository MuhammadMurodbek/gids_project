import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {Wrapper} from "./index.style"
import DoubleCheck from "../../../components/molecules/double.check"
const Index = () => {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <Wrapper>
            {/* <div className="title-header-radio">Kim kerakligini tanlang</div> */}
            <FormControl component="fieldset">
            <RadioGroup row={true} aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="gid" control={<Radio />} label={<span>Gid</span>} className="first"/>
                <FormControlLabel value="translator" control={<Radio />} label={<span>Tarjimon</span>} />
                <div className="double_check" style={value === "translator" ? {display:"inline-block"}:{display:'none'}}>
                    <DoubleCheck margin="10px 0 0 30px" name1="Sinxron" name2="Izchil" />
                </div>
            </RadioGroup>
            </FormControl>
        </Wrapper>
    )
}

export default Index
