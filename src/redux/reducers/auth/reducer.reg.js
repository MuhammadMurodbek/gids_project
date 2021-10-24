// const dataPost = {
//     data:{}
// }
const post_auth_reg_reducer = (state = {}, action) => {
   
    switch(action.type) {
        case "POST_AUTH_REG_0" : return {
            data:action.payload,
            status:'success'
        }; 
        
        case "INT_500" : return {
            status:'Internal server error'
        };
        
        default: return state; 
     }
} 

export default post_auth_reg_reducer