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