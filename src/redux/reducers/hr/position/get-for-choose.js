import { toast } from "react-toastify";
import {get_choose_hr_position} from "../../../store/hr/position/get-for-choose"

const get_For_Choose_Position_Reducer = (state=get_choose_hr_position, action) => {
    switch (action.type) {
        case "GET_FOR_CHOOSE_HR_POSITION_0" :return{data:action.payload};
        case "GET_FOR_CHOOSE_HR_POSITION_10001":return toast.error(action.payload);
        case "GET_FOR_CHOOSE_HR_POSITION_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_For_Choose_Position_Reducer