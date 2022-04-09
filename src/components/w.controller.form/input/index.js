import InputText from "../../atom/input.second"
import {Container} from "./style"
import {Controller} from "react-hook-form"

const InputController = ({name,control, placeholder, step}) => {
    return(
        <Container>
            <Controller
                name={name}
                control={control}
                render={({   field: { onChange, onBlur, value, name, ref } }) => 
                    <InputText type="number" width="100%" onChange={onChange} value={value} name={name}  ref={ref} placeholder={placeholder} step={step}/>
                }
            />
        </Container>
    )
}
export default InputController