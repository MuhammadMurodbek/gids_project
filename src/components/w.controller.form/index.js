import InputText from "../atom/input.second"

export const InputController = (Controller, control) => {
    return(
        <Controller
            name="test"
            control={control}
            render={({   field: { onChange, onBlur, value, name, ref } }) => {
                // sending integer instead of string.
                return <InputText onChange={onChange} value={value} name={name}  ref={ref}/>;
            }}
        />
    )
}