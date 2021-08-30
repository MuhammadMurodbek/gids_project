import { toast } from "react-toastify"
import {get_Device_By_Id} from "../../../store/sozlamalar/device/getById"

const get_Device_By_Id_Reducer = (state=get_Device_By_Id, action) => {
    switch (action.type) {
        case "GET_DEVICE_BY_ID_0" : return {data:action.payload}
        case "GET_DEVICE_BY_ID_17000": return toast.error(action.payload);
        case "GET_DEVICE_BY_ID_10001": return toast.error(action.payload);
        case "GET_DEVICE_BY_ID_10000": return toast.error(action.payload);
        default:return state
    }
}
export default get_Device_By_Id_Reducer