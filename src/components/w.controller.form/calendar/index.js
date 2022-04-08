import React,{useEffect} from 'react'
import { Container } from "./style"
import { Controller } from "react-hook-form";
import { DatePicker } from 'antd';

const RadioGroupComponent = ({ control, name, label, placeholder }) => {
    const dateFormat = 'DD-MM-YYYY';

    const inputSelect = document.querySelectorAll('.ant-picker-input input')[0]
    const inputSelect2 = document.querySelectorAll('.ant-picker-input input')[1]
    const inputSelect3 = document.querySelectorAll('.ant-picker-input input')[3]
    useEffect(() => {
        const inputSelects = document.getElementById('141')
        // console.log(inputSelects)
        inputSelects?.setAttribute('maxlength', 10)
        inputSelects?.addEventListener('keyup', function (e) {
            var v = e.target.value;
            if (v.match(/^\d{2}$/) !== null) {
                e.target.value = v + '-';
            } else if (v.match(/^\d{2}\-\d{2}$/) !== null) {
                e.target.value = v + '-';
            }
        })
    }, [])
    inputSelect?.setAttribute('maxlength', 10)
    inputSelect?.addEventListener('keyup', function (e) {
        var v = e.target.value;
        if (v.match(/^\d{2}$/) !== null) {
            e.target.value = v + '-';
        } else if (v.match(/^\d{2}\-\d{2}$/) !== null) {
            e.target.value = v + '-';
        }
    })
    inputSelect2?.setAttribute('maxlength', 10)
    inputSelect2?.addEventListener('keyup', function (e) {
        var v = e.target.value;
        if (v.match(/^\d{2}$/) !== null) {
            e.target.value = v + '-';
        } else if (v.match(/^\d{2}\-\d{2}$/) !== null) {
            e.target.value = v + '-';
        }
    })
    inputSelect3?.setAttribute('maxlength', 10)
    inputSelect3?.addEventListener('keyup', function (e) {
        var v = e.target.value;
        if (v.match(/^\d{2}$/) !== null) {
            e.target.value = v + '-';
        } else if (v.match(/^\d{2}\-\d{2}$/) !== null) {
            e.target.value = v + '-';
        }
    })

    return (
        <Container>
            {label && <label>{label}</label>}
            <Controller
                id="141"
                control={control}
                name={name}
                render={({ field }) => (
                    <DatePicker
                        format={dateFormat}
                        className="input"
                        placeholderText={placeholder || 'Select date'}
                        onChange={(e) => field.onChange(e)}
                        selected={field.value}
                    />
                )}
            />
        </Container>
    )
}

export default RadioGroupComponent