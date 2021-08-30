import {postNumber} from "../../store/auth"
import {toast} from "react-toastify"

const Success = (payload) => {
    console.log(payload)
    toast.success(payload.data.message)
    window.location.href="/sms-code"
}

const postPhoneNumber = (state = postNumber, action) => {
    switch(action.type) {
        case "POST_PHONE_0" : Success(action.payload); break;
        case "POST_PHONE_10001" : toast.error(action.payload.data.message); break;
        case "POST_PHONE_10000" : toast.error(action.payload.data.message); break;
        case "POST_PHONE_11000" : toast.error(action.payload.data.message); break;
        case "POST_PHONE_11002" : toast.error(action.payload.data.message); break;
        case "POST_PHONE_11005" : toast.error(action.payload.data.message); break;
        case "POST_PHONE_11006" : toast.error(action.payload.data.message); break;
        default: return state; 
     }
} 

export default postPhoneNumber