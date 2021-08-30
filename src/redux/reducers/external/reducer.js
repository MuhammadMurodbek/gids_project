const initialState = {
    check:true
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case 'toggle' : return {
            check:!state.check
        }
        default : return state
    }
}
export default reducer