// const dataPost = {
//     data:{}
// }
const post_auth_reg_reducer = (state = {}, action) => {
   
    switch(action.type) {
        case "POST_AUTH_REG_0" : return {
            data:action.payload,
            status:200
        }; 
        case "POST_AUTH_REG_400": return {
            status:400,
        };
        case "INT_500" : return {
            status:500
        };
        
        default: return state; 
     }
} 

export default post_auth_reg_reducer