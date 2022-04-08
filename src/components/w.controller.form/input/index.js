import InputText from "../../atom/input.second"
import {Container} from "./style"
import {Controller} from "react-hook-form"

const InputController = ({name,control, placeholder}) => {
    return(
        <Container>
            <Controller
                name={name}
                control={control}
                render={({   field: { onChange, onBlur, value, name, ref } }) => 
                    // sending integer instead of string.
                    <InputText type="number" width="100%" onChange={onChange} value={value} name={name}  ref={ref} placeholder={placeholder}/>
                }
            />
        </Container>
    )
}
export default InputController