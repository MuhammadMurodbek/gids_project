import { toast } from "react-toastify";
import { Success } from "../../../api";
import {update_production_process} from  "../../../store/production/process/update"

const update_Production_Process_Reducer = (state=update_production_process, action) => {
    switch (action.type) {
        case "UPDATE_PRODUCTION_PROCESS_0" : return Success("/production/process", "updated successfully!!!");
        case "UPDATE_PRODUCTION_PROCESS_47000" : return toast.error(action.payload);
        case "UPDATE_PRODUCTION_PROCESS_10001" : return toast.error(action.payload);
        case "UPDATE_PRODUCTION_PROCESS_10000" : return toast.error(action.payload);
        default : return state
    }
}
export default update_Production_Process_Reducer