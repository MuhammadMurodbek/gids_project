import { toast } from "react-toastify";
import {get_choose_hr_section} from "../../../store/hr/section/get-for-choose"

const get_For_Choose_Section_Reducer = (state=get_choose_hr_section, action) => {
    switch (action.type) {
        case "GET_FOR_CHOOSE_HR_SECTION_0" :return{data:action.payload.data};
        case "GET_FOR_CHOOSE_HR_SECTION_14000":return toast.error(action.payload);
        case "GET_FOR_CHOOSE_HR_SECTION_10000":return toast.error(action.payload);
        case "GET_FOR_CHOOSE_HR_SECTION_10001":return toast.error(action.payload);
        default:return state
    }
}
export default get_For_Choose_Section_Reducer