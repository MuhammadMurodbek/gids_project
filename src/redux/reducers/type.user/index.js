const type_user = "user"

const reducer_user_type = (state=type_user, action) => {
    if(action.payload === "CHANGE_USER_TYPE"){
        return {type:action.payload}
    }else{
        return state
    }
}
export default reducer_user_type
