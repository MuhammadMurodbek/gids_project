const post_auth_ent_reducer = (state = {}, action) => {
   
    switch(action.type) {
        case "POST_AUTH_ENT_0" : return {
            data:action.payload,
            status:'success'
        }; 
        case "POST_AUTH_ENT_429": return {
            status:"429"
        };
        case "INT_500" : return {
            status:'Internal server error'
        };
        
        default: return state; 
     }
} 

export default post_auth_ent_reducer