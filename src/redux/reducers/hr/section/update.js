import { toast } from "react-toastify";
import {update_hr_section} from "../../../store/hr/section/update"

const Success = () => {
    toast.success("Successfully updated");
    window.location.href = "/hr/sections"
}
const update_Section_Reducer = (state=update_hr_section, action) => {
    switch (action.type) {
        case "UPDATE_HR_SECTION_0" :return Success();
        case "UPDATE_HR_SECTION_13000":return toast.error(action.payload);
        case "UPDATE_HR_SECTION_11000":return toast.error(action.payload);
        case "UPDATE_HR_SECTION_14000":return toast.error(action.payload);
        case "UPDATE_HR_SECTION_14001":return toast.error(action.payload);
        case "UPDATE_HR_SECTION_14002":return toast.error(action.payload);
        case "UPDATE_HR_SECTION_14003":return toast.error(action.payload);
        case "UPDATE_HR_SECTION_10001":return toast.error(action.payload);
        case "UPDATE_HR_SECTION_10000":return toast.error(action.payload);
        default:return state
    }
}
export default update_Section_Reducer