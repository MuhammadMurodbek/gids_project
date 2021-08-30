const initialState = {
    ali:9
}

function aliReducer(state = initialState, action) {
    switch(action.type) {
        case "increment":
            return {
                ali:state.ali+1
            }
        case "decrement":
            return {
                ali:state.ali-1
            }
        default: return state
    }
}
export default aliReducer