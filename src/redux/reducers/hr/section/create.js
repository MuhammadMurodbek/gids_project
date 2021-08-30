import { toast } from "react-toastify"
import {create_HR_Section} from "../../../store/hr/section/create"

const Success = () => {
    toast.success("Successfully created hr section !!!")
    window.location.href = '/hr/sections'
}
const create_HR_Section_Reducer = (state=create_HR_Section, action) => {
    switch(action.type){
        case "CREATE_HR_SECTION_0" : return Success();
        case "CREATE_HR_SECTION_13000" : return toast.error(action.payload)
        case "CREATE_HR_SECTION_14003" : return toast.error(action.payload)
        case "CREATE_HR_SECTION_14002" : return toast.error(action.payload)
        case "CREATE_HR_SECTION_14001" : return toast.error(action.payload)
        case "CREATE_HR_SECTION_10000" : return toast.error(action.payload)
        case "CREATE_HR_SECTION_10001" : return toast.error(action.payload)
        case "CREATE_HR_SECTION_11000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_HR_Section_Reducer