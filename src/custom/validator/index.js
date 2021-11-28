// import * as yup from "yup";
export const validator = (type,item,count,textTrue,textFalse, setState, state) => {
    let text = ''
    if(type === 'min'){
        if(item.length<count) text = textTrue
        else text = textFalse
    }
    if(type === 'max'){
        if(item.length>count) text = textTrue
        else text = textFalse
    }
    if(type === '_min'){
        if(item.length<=count) text = textTrue
        else text = textFalse
    }
    if(type === '_max'){
        if(item.length>=count) text = textTrue
        else text = textFalse
    }
    if(type === 'email'){
        if(!item.includes('@')) text=textTrue
        else text = textFalse
    }
    if(type === 'select'){
        if(!item) text = textTrue
        else text = textFalse
    }
    if(setState) setState({...state, errorText: text})
    return text
}

export const validatorState = (data, type, count, errorText) => {
    console.log(data, errorText)
    let text = ''
    if(type === 'min') {
        if(data === null || data.length < count) text = errorText}
    if(type === 'exist' && data) text = errorText
    if(type === 'object' && Object.keys(data || {}).length === 0) text = errorText
    if(type === 'max' && (data<=0 || data==='')) text = errorText
    if(type === "boolean" && data) text = errorText
    if(type === "string" && data==='') text=errorText
    if(type === "array" && !data?.length) text = errorText
    return text
}