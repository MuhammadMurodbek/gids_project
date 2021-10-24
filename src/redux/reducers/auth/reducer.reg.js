// import {postNumber} from "../../store/auth"
import {toast} from "react-toastify"

// const Success = (payload) => {
//     console.log(payload)
//     toast.success(payload.data.message)
//     window.location.href="/sms-code"
// }

const post_auth_reg_reducer = (state = {}, action) => {
    switch(action.type) {
        case "POST_AUTH_REG_0" : toast.success('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            }); break;
        
        case "POST_AUTH_REG_400" : alert("error"); break;
        
        default: return state; 
     }
} 

export default post_auth_reg_reducer