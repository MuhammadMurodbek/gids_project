import { toast } from "react-toastify";
import {update_status_warehouse_material_order} from "../../../store/warehouse/order/update-status"
import {Success} from "../../../api"

const update_Status_Warehouse_Reducer_Order_Reducer = (state=update_status_warehouse_material_order, action) => {
    switch (action.type) {
        case "SET_STATUS_WAREHOUSE_MATERIAL_ORDER_0" :return Success('/ware-house/products', 'canceled successfully!!!');
        case "SET_STATUS_WAREHOUSE_MATERIAL_ORDER_31003":toast.error(action.payload); break;
        case "SET_STATUS_WAREHOUSE_MATERIAL_ORDER_10001":toast.error(action.payload); break;
        case "SET_STATUS_WAREHOUSE_MATERIAL_ORDER_10000":toast.error(action.payload); break;
        default:return state
    }
}
export default update_Status_Warehouse_Reducer_Order_Reducer