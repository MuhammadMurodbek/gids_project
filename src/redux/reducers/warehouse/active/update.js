import { toast } from "react-toastify";
import { Success } from "../../../api";
import {update_warehouse_active} from "../../../store/warehouse/active/update"

const update_WareHouse_Active_Reducer = (state=update_warehouse_active, action) => {
    switch (action.type) {
        case "UPDATE_WAREHOUSE_ACTIVE_0" :return Success("/ware-house/active", "updated successfully!!!");
        case "UPDATE_WAREHOUSE_ACTIVE_22001":toast.error(action.payload); break;
        case "UPDATE_WAREHOUSE_ACTIVE_22000":toast.error(action.payload); break;
        case "UPDATE_WAREHOUSE_ACTIVE_10001":toast.error(action.payload); break;
        case "UPDATE_WAREHOUSE_ACTIVE_10000":toast.error(action.payload); break;
        default:return state
    }
}
export default update_WareHouse_Active_Reducer