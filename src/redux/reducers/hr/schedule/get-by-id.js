import { toast } from "react-toastify";
import {get_by_hr_schedule} from "../../../store/hr/schedule/get-by-id"

const get_ById_HR_Schedule_Reducer = (state=get_by_hr_schedule, action) => {
    switch (action.type) {
        case "GET_BY_ID_HR_SCHEDULE_0" :return{data:action.payload.data};
        case "GET_BY_ID_HR_SCHEDULE_10001":return toast.error(action.payload);
        case "GET_BY_ID_HR_SCHEDULE_10000":return toast.error(action.payload);
        case "GET_BY_ID_HR_SCHEDULE_15000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_HR_Schedule_Reducer