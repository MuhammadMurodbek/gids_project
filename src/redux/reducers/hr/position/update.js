import { toast } from "react-toastify";
import { Success } from "../../../api";
import {update_hr_position} from "../../../store/hr/position/update"

const update_Position_Reducer = (state=update_hr_position, action) => {
    switch (action.type) {
        case "UPDATE_HR_POSITION_0" : return Success("/hr/positions", "updated successfully!!!");
        case "UPDATE_HR_POSITION_13000":toast.error(action.payload); break;
        case "UPDATE_HR_POSITION_14000":toast.error(action.payload); break;
        case "UPDATE_HR_POSITION_15000":toast.error(action.payload); break;
        case "UPDATE_HR_POSITION_16000":toast.error(action.payload); break;
        case "UPDATE_HR_POSITION_16001":toast.error(action.payload); break;
        case "UPDATE_HR_POSITION_16002":toast.error(action.payload); break;
        case "UPDATE_HR_POSITION_10001":toast.error(action.payload); break;
        case "UPDATE_HR_POSITION_10000":toast.error(action.payload); break;
        default:return state
    }
}
export default update_Position_Reducer