import {delete_warehouse_active} from "../../../store/warehouse/active/delete"
import {toast} from "react-toastify"
import { Success } from "../../../api";

const delete_WareHouse_Active_Reducer = (state=delete_warehouse_active, action) => {
    switch (action.type) {
        case "DELETE_WAREHOUSE_ACTIVE_0" : return Success("/ware-house/active", "deleted successfully!!!"); 
        case "DELETE_WAREHOUSE_ACTIVE_22000": return toast.error(action.payload);
        case "DELETE_WAREHOUSE_ACTIVE_10000": return toast.error(action.payload);
        case "DELETE_WAREHOUSE_ACTIVE_10001": return toast.error(action.payload);
        default:return state
    }
}
export default delete_WareHouse_Active_Reducer 