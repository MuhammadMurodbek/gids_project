import React, { useState } from 'react';
import './styles.css';
// import {InputWrapper} from "./style"
function TextInput({ type = 'text', label }) {
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
  const {title, width} = props;
  return (
    <TextInput label={title} />
  );
}
