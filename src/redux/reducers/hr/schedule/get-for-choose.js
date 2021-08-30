import { toast } from "react-toastify";
import {get_choose_hr_schedule} from "../../../store/hr/schedule/get-for-choose"

const get_For_CHoose_Schedule_Reducer = (state=get_choose_hr_schedule, action) => {
    switch (action.type) {
        case "GET_FOR_CHOOSE_HR_SCHEDULE_0" :return{data:action.payload};
        case "GET_FOR_CHOOSE_HR_SCHEDULE_10001":return toast.error(action.payload);
        case "GET_FOR_CHOOSE_HR_SCHEDULE_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_For_CHoose_Schedule_Reducer