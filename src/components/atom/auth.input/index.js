import React, { useState } from 'react';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import {mainGreen} from "../../../styles/global/colors"
import './styles.css';
import {Eye, InputWrapper} from "./style"

function TextInput({ type, label, setState }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
    if(setState){
      setState(e.target.value || '');
    }
  }

  return (
    <div className="input-container">
      <input type={type} value={value} name="name" onChange={handleChange} />
      <label className={value && 'filled'}>
        {label}
      </label>
    </div>
  );
}

export default function App(props) {
  const {title, password, setState} = props;

  const [check, setCheck] = useState(true)
  const handleChangeOpen = () => {
    setCheck(false)
  }
  const handleChangeClose = () => {
    setCheck(true)
  }

  return (
    <InputWrapper>
      <TextInput setState={setState} label={title} type={(password && check) ? "password" : "text"}/>
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
    </InputWrapper>
  );
}
