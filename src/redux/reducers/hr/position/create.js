import { toast } from "react-toastify"
import { Success } from "../../../api";
import {create_HR_Position} from "../../../store/hr/position/create"

const create_HR_Position_Reducer = (state=create_HR_Position, action) => {
    switch(action.type){
        case "CREATE_HR_POSITION_0" : return Success("/hr/positions", "created successfully!!!");
        case "CREATE_HR_POSITION_13000" : return toast.error(action.payload)
        case "CREATE_HR_POSITION_14000" : return toast.error(action.payload)
        case "CREATE_HR_POSITION_15000" : return toast.error(action.payload)
        case "CREATE_HR_POSITION_16001" : return toast.error(action.payload)
        case "CREATE_HR_POSITION_16002" : return toast.error(action.payload)
        case "CREATE_HR_POSITION_10001" : return toast.error(action.payload)
        case "CREATE_HR_POSITION_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_HR_Position_Reducer