import { toast } from "react-toastify"
import {update_Device_By_Id} from "../../../store/sozlamalar/device/update"

const Success = () => {
    toast.success("Successfully updated !!!")
    window.location.href="/settings";
}
const update_Device_By_Id_Reducer = (state=update_Device_By_Id, action) => {
    switch (action.type) {
        case "UPDATE_DEVICE_BY_ID_0" : return Success();
        case "UPDATE_DEVICE_BY_ID_17001":return toast.error(action.payload)
        case "UPDATE_DEVICE_BY_ID_17000":return toast.error(action.payload)
        case "UPDATE_DEVICE_BY_ID_10001":return toast.error(action.payload)
        case "UPDATE_DEVICE_BY_ID_10000":return toast.error(action.payload)
        default:return state
    }
}
export default update_Device_By_Id_Reducer