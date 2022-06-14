import React from 'react'
import {Container} from "./style"
import { Controller } from "react-hook-form";
import {FormControlLabel, RadioGroup, Radio} from "@material-ui/core"

const RadioGroupComponent = ({control, name, label, label1, label2, value1, value2}) => {
    return (
        <Container>
            {label && <label>{label}</label>}
            <Controller
                render={({ field }) => (
                    <RadioGroup row aria-label="gender" {...field}>
                        <FormControlLabel value={value1} control={<Radio className="radio" />} label={label1}/>
                        <FormControlLabel value={value2} control={<Radio className="radio" />} label={label2} />
                    </RadioGroup>
                )}
                name={name}
                control={control}
            />
        </Container>
    )
}

export default RadioGroupComponent
