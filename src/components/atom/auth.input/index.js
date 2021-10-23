import React, { useState } from 'react';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import {mainGreen} from "../../../styles/global/colors"
import './styles.css';
import {Eye, InputWrapper} from "./style"
function TextInput({ type, label }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
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
  const {title, type, password} = props;

  const [check, setCheck] = useState(true)
  const handleChangeOpen = () => {
    setCheck(false)
  }
  const handleChangeClose = () => {
    setCheck(true)
  }

  return (
    <InputWrapper>
      <TextInput label={title} type={(password && check) ? "password" : "text"}/>
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
