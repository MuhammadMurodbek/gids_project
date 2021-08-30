import {delete_hr_schedule} from "../../../store/hr/schedule/delete"
import {toast} from "react-toastify"

const delete_HR_Schedule_Reducer = (state=delete_hr_schedule, action) => {
    switch (action.type) {
        case "DELETE_HR_SCHEDULE_0" : return toast.success("deleted successfully !!"); 
        case "DELETE_HR_SCHEDULE_15000": return toast.error(action.payload);
        case "DELETE_HR_SCHEDULE_10000": return toast.error(action.payload);
        case "DELETE_HR_SCHEDULE_10001": return toast.error(action.payload);
        default:return state
    }
}
export default delete_HR_Schedule_Reducer 