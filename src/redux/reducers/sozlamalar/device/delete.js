import {delete_device} from "../../../store/sozlamalar/device/delete"
import {toast} from "react-toastify"

const delete_Device_Many_Reducer = (state=delete_device, action) => {
    switch (action.type) {
        case "DELETE_DEVICE_MANY_0" : return toast.success("deleted successfully !!"); 
        case "DELETE_DEVICE_MANY_10001": return toast.error("10000 error device");
        case "DELETE_DEVICE_MANY_10000": return toast.error("10001 error ddd");
        default:return state
    }
}
export default delete_Device_Many_Reducer