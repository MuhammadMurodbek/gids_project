import { toast } from "react-hot-toast";

const post_auth_ent_reducer = (state = {}, action) => {
   
    switch(action.type) {
        case "POST_AUTH_ENT_0" : return {
            data:action.payload,
            status:200
        };
        case "POST_AUTH_ENT_400": return {
            data:action.payload,
            status:400
        }; 
        case "POST_AUTH_ENT_401": return {
            data:action.payload,
            status:401
        }; 

        case "INT_500" : return toast("Internal server error");
        
        default: return state; 
     }
} 

export default post_auth_ent_reducer