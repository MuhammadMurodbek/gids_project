export const checkDisabled = (data, state) => {
    if(data){
        if(state) return true
        else return false
    }
    return false
}