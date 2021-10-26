import { toast } from "react-hot-toast";

const post_auth_reg_check_reducer = (state = {}, action) => {
   
    switch(action.type) {
        case "POST_AUTH_REG_CHECK_0" : return {
            data:action.payload,
            status:200
        }; 
        case "POST_AUTH_REG_CHECK_101": return {
            data:action.payload,
            status:400,
        }
        default: return state; 
     }
} 

export default post_auth_reg_check_reducer