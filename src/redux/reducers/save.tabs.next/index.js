const initialState = 0

const saveTabReducer = (state=initialState, action)=>{
    switch(action.type) {
        case 'SELECT_INDEX': return action.payload
        default: return state
    }
}

export default saveTabReducer