import {Input} from "../../atom/textarea/index.style"
import {Container} from "./style"
import {Controller} from "react-hook-form"

const InputController = ({name, control, placeholder}) => {
    return(
        <Container>
            <Controller
                name={name}
                control={control}
                render={({   field: { onChange, onBlur, value, name, ref } }) => {
                    // sending integer instead of string.
                    return <Input onChange={onChange} value={value} name={name} placeholder={placeholder}  ref={ref}/>;
                }}
            />
        </Container>
    )
}
export default InputController