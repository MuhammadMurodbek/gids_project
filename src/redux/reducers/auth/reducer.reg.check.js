const post_auth_reg_check_reducer = (state = {}, action) => {
   
    switch(action.type) {
        case "POST_AUTH_REG_CHECK_0" : return {
            data:action.payload,
            status:'success'
        }; 
        case "POST_AUTH_REG_CHECK_429": return {
            status:"429"
        };
        case "INT_500" : return {
            status:'Internal server error'
        };
        
        default: return state; 
     }
} 

export default post_auth_reg_check_reducer