import React, { useState } from 'react';
import './styles.css';
// import {InputWrapper} from "./style"
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
  const {title, type, width} = props;
  return (
    <TextInput label={title} type={type === "password" ? "password" : "text"}/>
  );
}
