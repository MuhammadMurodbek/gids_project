import React, {useCallback} from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {Wrapper} from "./index.style"
import DoubleCheck from "../../../components/molecules/double.check"
const Index = ({setState, state, errorText}) => {
    const [value, setValue] = React.useState('female');

    const handleChange = useCallback((event) => {
        setValue(event.target.value);
        if(setState){
            setState({...state, who_need:event.target.value})
        }
    },[value, setState])
    return (
        <Wrapper>
            {/* <div className="title-header-radio">Kim kerakligini tanlang</div> */}
            <FormControl component="fieldset">
            <RadioGroup row={true} aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="gid" control={<Radio error/>} label={<span>Gid</span>} className="first"/>
                <FormControlLabel value="translator" control={<Radio />} label={<span>Tarjimon</span>} />
                <div className="double_check" style={value === "translator" ? {display:"inline-block"}:{display:'none'}}>
                    <DoubleCheck   margin="10px 0 0 120px" name1="Sinxron" name2="Izchil" name3="Yozma tarjimon" justifyContent="flex-end"  />
                </div>
            </RadioGroup>
            </FormControl>
            <span style={{position: 'absolute', fontSize:'11px', bottom:-14, left:0, fontStyle:'italic', color:'red'}}>
                {errorText}
            </span>
        </Wrapper>
    )
}

export default Index
