import React, { useState } from 'react';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import {mainGreen} from "../../../styles/global/colors"
import './styles.css';
import {Eye, InputWrapper} from "./style"

function TextInput({ type, label, setState, error, errorText, setError }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
    if(setError) {
      setError({error:false, errorText:false})
    }
    if(setState){
      setState(e.target.value || '');
    }
  }

  return (
    <div className="input-container">
      <input  type={type} value={value} name="name" onChange={handleChange} />
      <label className={value && 'filled'}>
        {label}
      </label>
    </div>
  );
}

export default function App(props) {
  const {title, password, setState, error, errorText, setError} = props;

  const [check, setCheck] = useState(true)
  const handleChangeOpen = () => {
    setCheck(false)
  }
  const handleChangeClose = () => {
    setCheck(true)
  }

  return (
    <InputWrapper>
      <TextInput 
        error={error} 
        errorText={errorText} 
        setState={setState} 
        label={title} 
        type={(password && check) ? "password" : "text"}
        setError={setError} 
      />
      {
        password ? 
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
      <span style={{position: 'absolute', fontSize:'11px', bottom:-14,  fontStyle:'italic', color:'red'}}>
        {errorText ? '* ' + errorText:null}
      </span>
    </InputWrapper>
  );
}
