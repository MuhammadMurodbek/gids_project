import React from 'react'
import {Wrapper} from './style'
import MultipleValueTextInput from 'react-multivalue-text-input';
import HighlightOffIcon from '@material-ui/icons/Close';
const Index = (props) => {
    const {field,setState} = props
    const handleChange = (data) => {
        if(setState) setState(prev=>{return {
            ...prev,
            [field]: data
        }} )
    }
    return (
        <Wrapper>
            <MultipleValueTextInput
                onItemAdded={(item, allItems) => handleChange(allItems)}
                onItemDeleted={(item, allItems) => handleChange(allItems)}
                label={<span className="label">{props?.label}</span>} 
                name="item-input"
                placeholder="Qo'shimcha kurslarni kiriting; (ENTER tugmasi bilan so'zlarni ajrating )"
                deleteButton={<span className="icon_del"><HighlightOffIcon/></span>}
                className="input_multi"
            />
        </Wrapper>
    )
}

export default Index
