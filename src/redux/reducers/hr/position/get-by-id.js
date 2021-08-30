import { toast } from "react-toastify";
import {get_by_hr_position} from "../../../store/hr/position/get-by-id"

const get_ById_HR_Position_Reducer = (state=get_by_hr_position, action) => {
    switch (action.type) {
        case "GET_BY_ID_HR_POSITION_0" :return{data:action.payload.data};
        case "GET_BY_ID_HR_POSITION_10001":return toast.error(action.payload);
        case "GET_BY_ID_HR_POSITION_10000":return toast.error(action.payload);
        case "GET_BY_ID_HR_POSITION_16000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_HR_Position_Reducer