import { toast } from "react-toastify"
import {postSMS} from "../../store/auth"

const Success = (payload) => {
    toast.success("Successfully verified !!!")
    const token = payload.data.data.token
    localStorage.setItem("token", token)
    window.location.href="/sale-offers"
    return {data:payload}
}
const postSMS_Reducer = (state=postSMS, action) => {
    switch(action.type){
        case "POST_SMS_0" : Success(action.payload);break;
        case "POST_SMS_11000" : return toast.error(action.payload)
        case "POST_SMS_11001" : return toast.error(action.payload)
        case "POST_SMS_11002" : return toast.error(action.payload)
        default : return state
    }
}
export default postSMS_Reducer;