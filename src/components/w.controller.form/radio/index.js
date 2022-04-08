import React from 'react'
import {Container} from "./style"
import { Controller } from "react-hook-form";
import {FormControlLabel, RadioGroup, Radio} from "@material-ui/core"

const RadioGroupComponent = ({control, name, label, label1, label2}) => {
    return (
        <Container>
            {label && <label>{label}</label>}
            <Controller
                render={({ field }) => (
                    <RadioGroup row aria-label="gender" {...field}>
                        <FormControlLabel value="female" control={<Radio className="radio" />} label={label1}/>
                        <FormControlLabel value="male" control={<Radio className="radio" />} label={label2} />
                    </RadioGroup>
                )}
                name={name}
                control={control}
            />
        </Container>
    )
}

export default RadioGroupComponent
