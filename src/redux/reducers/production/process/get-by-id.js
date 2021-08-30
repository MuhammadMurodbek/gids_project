import { toast } from "react-toastify";
import {get_by_id_production_process} from "../../../store/production/process/get-by-id"

const get_ById_Production_Process_Reducer = (state=get_by_id_production_process, action) => {
    switch (action.type) {
        case "GET_BY_ID_PRODUCTION_PROCESS_0" :return{data:action.payload.data};
        case "GET_BY_ID_PRODUCTION_PROCESS_10001":return toast.error(action.payload);
        case "GET_BY_ID_PRODUCTION_PROCESS_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_Production_Process_Reducer