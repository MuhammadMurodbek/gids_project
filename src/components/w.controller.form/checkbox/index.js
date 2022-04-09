import { Checkbox } from 'antd';
import { Controller } from "react-hook-form"
import { Container } from "./style"

const CheckBoxController = ({ name, control, label }) => {
    return (
        <Container>
            <Controller
                control={control}
                name={name}
                render={({ field: { value, onChange } }) => (
                    <Checkbox
                        checked={value}
                        onChange={(e) => {
                            onChange(e.target.checked);
                        }}
                    >{label}</Checkbox>
                )}
            />
        </Container>
    )
}
export default CheckBoxController