import {delete_hr_position} from "../../../store/hr/position/delete"
import {toast} from "react-toastify"

const delete_HR_Position_Reducer = (state=delete_hr_position, action) => {
    switch (action.type) {
        case "DELETE_HR_POSITION_0" : return toast.success("deleted successfully !!"); 
        case "DELETE_HR_POSITION_16000": return toast.error(action.payload);
        case "DELETE_HR_POSITION_10000": return toast.error(action.payload);
        case "DELETE_HR_POSITION_10001": return toast.error(action.payload);
        default:return state
    }
}
export default delete_HR_Position_Reducer 