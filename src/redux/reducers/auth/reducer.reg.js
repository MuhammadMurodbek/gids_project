const dataPost = {
    data:{}
}
const post_auth_reg_reducer = (state = {}, action) => {
   
    switch(action.type) {
        case "POST_AUTH_REG_0" : return {
            data:action.payload,
            success:true,
        }; 
        
        case "POST_AUTH_REG_400" : alert("error"); break;
        
        default: return state; 
     }
} 

export default post_auth_reg_reducer