import React from "react";
import Select from "react-select";
import { Controller } from "react-hook-form";
import {Container} from "./style"

const Multiselect = ({ label, name, options = [], control, pl, isMulti }) => {
  const customStyles = {
    menuPortal: provided => ({ ...provided, zIndex: 9999 }),
    menu: provided => ({ ...provided, zIndex: 9999 })
  }
  return (
    <Container>
      {label && <label>{label}</label> }
      <div className="class_tr">
        <Controller
          name={name}
          control={control}
          render={({ field: { value, onChange, onBlur } }) => {
            return (
              <Select
                options={options}
                placeholder={pl}
                onChange={onChange }
                onBlur={onBlur}
                value={value}
                isMulti={isMulti}
                menuPortalTarget={document.body}
                styles={customStyles}
              />
            );
          }}
        />
      </div>
    </Container>
  );
};

export default Multiselect;
