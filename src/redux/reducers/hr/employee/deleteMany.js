import {delete_many_hr_section} from "../../../store/hr/section/deleteMany"
import {toast} from "react-toastify"

const delete_Many_HR_Section_Reducer = (state=delete_many_hr_section, action) => {
    switch (action.type) {
        case "DELETE_MANY_HR_SECTION_0" : return toast.success("deleted many successfully !!"); 
        case "DELETE_MANY_HR_SECTION_10000": return toast.error(action.payload);
        case "DELETE_MANY_HR_SECTION_10001": return toast.error(action.payload);
        default:return state
    }
}
export default delete_Many_HR_Section_Reducer 