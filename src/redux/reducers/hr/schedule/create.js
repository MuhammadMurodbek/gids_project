import { toast } from "react-toastify"
import {create_HR_Schedule} from "../../../store/hr/schedule/create"

const Success = () => {
    toast.success("Successfully created hr schedule !!!")
}
const create_HR_Schedule_Reducer = (state=create_HR_Schedule, action) => {
    switch(action.type){
        case "CREATE_HR_SCHEDULE_0" : Success();break;
        case "CREATE_HR_SCHEDULE_15001" : return toast.error(action.payload)
        case "CREATE_HR_SCHEDULE_15002" : return toast.error(action.payload)
        case "CREATE_HR_SCHEDULE_10001" : return toast.error(action.payload)
        default : return state
    }
}
export default create_HR_Schedule_Reducer