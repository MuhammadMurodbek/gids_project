import { toast } from "react-toastify";
import {update_hr_schedule} from "../../../store/hr/schedule/update"

const update_Schedule_Reducer = (state=update_hr_schedule, action) => {
    switch (action.type) {
        case "UPDATE_HR_SCHEDULE_0" :return toast.success("updated successfully !!");
        case "UPDATE_HR_SCHEDULE_15000":return toast.error(action.payload);
        case "UPDATE_HR_SCHEDULE_15001":return toast.error(action.payload);
        case "UPDATE_HR_SCHEDULE_15002":return toast.error(action.payload);
        case "UPDATE_HR_SCHEDULE_10001":return toast.error(action.payload);
        case "UPDATE_HR_SCHEDULE_10000":return toast.error(action.payload);
        default:return state
    }
}
export default update_Schedule_Reducer