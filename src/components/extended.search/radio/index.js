import React, {useEffect} from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {Wrapper} from "./index.style"
import DoubleCheck2 from "../../molecules/doble2"
import { useTranslation } from 'react-i18next';

const Index = ({setState, state, field, setDefaultValue}) => {
    const {t} = useTranslation()
    const [value, setValue] = React.useState(null);
    // console.log(setDefaultValue)
    useEffect(()=>{
        if(setDefaultValue) {
            setValue(setDefaultValue)
            if(setState){
                setState({...state, [field]:setDefaultValue});
            }
        }
    },[setDefaultValue])
    const handleChange = (event) => {
        setValue(event.target.value);
        if(setState){
            setState({...state, [field]: event.target.value});
        }
        // console.log(event.target.value)
    }
    // console.log(value)
    return (
        <Wrapper>
            <div className="title-header-radio"> {t("kengaytirlgan_Q.kimKerak")}</div>
            <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="gid" control={<Radio />} label={<span>{t("kengaytirlgan_Q.gid")}</span>} />
                <FormControlLabel value="translator" control={<Radio />} label={<span>{t("kengaytirlgan_Q.tarjion")}</span>} />
                <div style={value === "translator" ? {display:"inline-block"}:{display:'none'}}>
                    <DoubleCheck2 margin="0 0 0 30px" 
                    name1={t("kengaytirlgan_Q.sinxron")} 
                    name2={t("kengaytirlgan_Q.izchil")} 
                    name3={t("kengaytirlgan_Q.yozmaTarjimon")}
                    flexDirection="column"/>
                </div>
                
            </RadioGroup>
            </FormControl>
        </Wrapper>
    )
}

export default Index
