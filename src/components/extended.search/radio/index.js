import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {Wrapper} from "./index.style"

const Index = () => {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <Wrapper>
            <div className="title-header-radio">Kim kerakligini tanlang</div>
            <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="gid" control={<Radio />} label={<span>Gid</span>} />
                <FormControlLabel value="translator" control={<Radio />} label={<span>Tarjimon</span>} />
                <FormControlLabel value="writer" control={<Radio />} label={<span>Yozma tarjimon</span>} />
            </RadioGroup>
            </FormControl>
        </Wrapper>
    )
}

export default Index
