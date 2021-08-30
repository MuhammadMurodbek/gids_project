import { toast } from "react-toastify"
import { Success } from "../../../api";
import {create_production_process} from "../../../store/production/process/create"


const create_Production_Process_Reducer = (state=create_production_process, action) => {
    switch(action.type){
        case "CREATE_PRODUCTION_PROCESS_0" : return Success("/production/process", "created successfully!!!");
        case "CREATE_PRODUCTION_PROCESS_47000" : return toast.error(action.payload)
        case "CREATE_PRODUCTION_PROCESS_10001" : return toast.error(action.payload)
        case "CREATE_PRODUCTION_PROCESS_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_Production_Process_Reducer