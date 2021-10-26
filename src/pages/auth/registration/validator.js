export const validator = (type,item,count,textTrue,textFalse) => {
    let text = ''
    if(type === 'min'){
        if(item.length<count) text = textTrue
        else text = textFalse
    }
    if(type === 'max'){
        if(item.length>count) text = textTrue
        else text = textFalse
    }
    return text
}