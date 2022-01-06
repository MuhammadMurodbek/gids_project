import React, {useState, useEffect, useCallback} from 'react'
import {Wrapper, Comment} from './style'
import MultipleValueTextInput from 'react-multivalue-text-input';
import HighlightOffIcon from '@material-ui/icons/Close';
const Index = (props) => {
    const {field,setState, state, defaultApiValue} = props
    const [array, setArray] = useState([])
    const [check, setCheck] = useState(true)
    const handleChange = (item) => {
       setArray([...array, item])
    }
    const handleDelete = (data) => {
        let clone = array.filter(item=>item!==data)
        setArray(clone)
    }
    useEffect(() =>{ if(setState){setState({...state,[field]:array})}},[array])
    useEffect(()=>{
        if(defaultApiValue && check) {
            setArray(defaultApiValue) 
            setCheck(false)
        }
    },[defaultApiValue])
    return (
        <Wrapper>
            <MultipleValueTextInput
                onItemAdded={(item, allItems) => handleChange(item)}
                label={<span className="label">{props?.label}</span>} 
                name="item-input"
                placeholder="Text"
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
