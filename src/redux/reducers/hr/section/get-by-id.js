import { toast } from "react-toastify";
import {get_by_hr_section} from "../../../store/hr/section/get-by-id"

const get_ById_HR_Section_Reducer = (state=get_by_hr_section, action) => {
    switch (action.type) {
        case "GET_BY_ID_HR_SECTION_0" :return{data:action.payload.data};
        case "GET_BY_ID_HR_SECTION_14000":return toast.error(action.payload);
        case "GET_BY_ID_HR_SECTION_10000":return toast.error(action.payload);
        case "GET_BY_ID_HR_SECTION_15000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_HR_Section_Reducer