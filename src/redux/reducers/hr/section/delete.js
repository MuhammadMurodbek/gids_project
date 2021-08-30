import {delete_hr_section} from "../../../store/hr/section/delete"
import {toast} from "react-toastify"

const delete_HR_Section_Reducer = (state=delete_hr_section, action) => {
    switch (action.type) {
        case "DELETE_HR_SECTION_0" : return toast.success("deleted successfully !!"); 
        case "DELETE_HR_SECTION_14000": return toast.error(action.payload);
        case "DELETE_HR_SECTION_10000": return toast.error(action.payload);
        case "DELETE_HR_SECTION_10001": return toast.error(action.payload);
        default:return state
    }
}
export default delete_HR_Section_Reducer 