import { toast } from "react-toastify";
import {get_paging_production_process} from "../../../store/production/process/get-paging"

const get_Paging_Production_Process_Reducer = (state=get_paging_production_process, action) => {
    switch (action.type) {
        case "GET_PAGING_PRODUCTION_PROCESS_0" :return{data:action.payload, loading: false};
        case "GET_PAGING_PRODUCTION_PROCESS_10001":return toast.error(action.payload);
        case "GET_PAGING_PRODUCTION_PROCESS_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_Paging_Production_Process_Reducer