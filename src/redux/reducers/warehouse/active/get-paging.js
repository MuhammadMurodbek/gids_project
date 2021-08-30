import { toast } from "react-toastify";
import {get_paging_warehouse_active} from "../../../store/warehouse/active/get-paging"

const get_Paging_WareHouse_Active_Reducer = (state=get_paging_warehouse_active, action) => {
    switch (action.type) {
        case "GET_PAGING_WAREHOUSE_ACTIVE_0" :return{data:action.payload, loading: false};
        case "GET_PAGING_WAREHOUSE_ACTIVE_10001":return toast.error(action.payload);
        case "GET_PAGING_WAREHOUSE_ACTIVE_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_Paging_WareHouse_Active_Reducer