import React, {useState, useEffect, useCallback} from 'react'
import {Wrapper, Comment} from './style'
import MultipleValueTextInput from 'react-multivalue-text-input';
import HighlightOffIcon from '@material-ui/icons/Close';
const Index = (props) => {
    const {field,setState, state} = props
    const [array, setArray] = useState([])
    const handleChange = useCallback((item) => {
       setArray([...array, item])
    },[array])
    const handleDelete = useCallback((data) => {
        let clone = array.filter(item=>item!==data)
        setArray(clone)
    },[array])
    useEffect(() =>{ if(setState){setState({...state,[field]:array})}},[array])
    console.log(array)
    return (
        <Wrapper>
            <MultipleValueTextInput
                onItemAdded={(item, allItems) => handleChange(item)}
                label={<span className="label">{props?.label}</span>} 
                name="item-input"
                placeholder="Qo'shimcha kurslarni kiriting; (ENTER tugmasi bilan so'zlarni ajrating )"
                deleteButton={<span className="icon_del"><HighlightOffIcon/></span>}
                className="input_multi"
            /> 
            <Comment>
                {   
                    array.length>0 ?
                    array.map((item, index) => (
                        <div key={index} className="item">
                            <span>{item}</span>
                            <span className="icon_del" onClick={()=>handleDelete(item)}><HighlightOffIcon/></span>
                        </div>
                    )):null
                }
            </Comment>
        </Wrapper>
    )
}

export default Index
