import { toast } from "react-toastify"
import {get_Device_Paging} from "../../../store/sozlamalar/device/get-paging"

const get_Device_Paging_Reducer = (state=get_Device_Paging, action)=>{
    switch(action.type){
        case "GET_DEVICE_PAGING_0" : return {data:action.payload.data}; 
        case "GET_DEVICE_PAGING_10000" : return toast.error(action.payload); 
        case "GET_DEVICE_PAGING_10001" : return toast.error(action.payload); 
        case "GET_DEVICE_PAGING_17001" : return toast.error(action.payload); 
        default: return state
    }
}
export default get_Device_Paging_Reducer;