import { toast } from "react-toastify";
import {get_All_HR_Schedule} from "../../../store/hr/schedule/get-all"

const get_All_HR_Schedule_Reducer = (state=get_All_HR_Schedule, action) => {
    switch (action.type) {
        case "GET_ALL_HR_SCHEDULE_0" :return{
            data:action.payload.data,
            loading:false,
        };
        case "GET_ALL_HR_SCHEDULE_10001":return {data:action.payload.data};
        case "GET_ALL_HR_SCHEDULE_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_All_HR_Schedule_Reducer