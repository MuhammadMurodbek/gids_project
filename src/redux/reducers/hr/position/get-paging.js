import { toast } from "react-toastify";
import {get_paging_hr_position} from "../../../store/hr/position/get-paging"

const get_Paging_Position_Reducer = (state=get_paging_hr_position, action) => {
    switch (action.type) {
        case "GET_PAGING_POSITION_0" :return{data:action.payload, loading: false};
        case "GET_PAGING_POSITION_10001":return toast.error(action.payload);
        case "GET_PAGING_POSITION_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_Paging_Position_Reducer