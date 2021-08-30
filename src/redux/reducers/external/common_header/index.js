const initialState = {
    data:[]
}
const common_header_reducer = (state=initialState, action) =>{
    if(action.type === 'COMMON_HEADER_ACTION')
     return {data:action.payload}
    else return state
}
export default common_header_reducer