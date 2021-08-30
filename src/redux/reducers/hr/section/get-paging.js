import { toast } from "react-toastify";
import {get_paging_hr_section} from "../../../store/hr/section/get-paging"

const get_Paging_HR_Section_Reducer = (state=get_paging_hr_section, action) => {
    switch (action.type) {
        case "GET_PAGING_HR_SECTION_0" :return{data:action.payload.data, loading: false  };
        case "GET_PAGING_HR_SECTION_10001":return toast.error(action.payload);
        case "GET_PAGING_HR_SECTION_10000":return toast.error(action.payload);
        case "GET_PAGING_HR_SECTION_14000":return toast.error(action.payload);
        default:return state
    }
}
export default get_Paging_HR_Section_Reducer