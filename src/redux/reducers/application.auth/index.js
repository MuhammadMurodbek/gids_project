const initialState = {
    data:{},
    position:'in_app',
}

const appAuthReducer = (state=initialState, action) => {
    switch(action.type){
        case 'APP_TO_REG':return{
            ...state,
            position:'in_auth'
        } 
        default : return state
    }
}
export default appAuthReducer