import { toast } from "react-toastify"
import {post_Device_Create} from "../../../store/sozlamalar/device/create"

const Success = () => {
    toast.success("Successfully created !!!")
    window.location.href="/settings"
}
const post_Device_Create_Reducer = (state=post_Device_Create, action)=>{
    switch(action.type){
        case "POST_DEVICE_CREATE_0" : return Success(); 
        case "POST_DEVICE_CREATE_10000" : return toast.error(action.payload); 
        case "POST_DEVICE_CREATE_10001" : return toast.error(action.payload); 
        case "POST_DEVICE_CREATE_17001" : return toast.error(action.payload); 
        default: return state
    }
}
export default post_Device_Create_Reducer;