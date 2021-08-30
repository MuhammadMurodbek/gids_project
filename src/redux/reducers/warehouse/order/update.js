import { toast } from "react-toastify";
import {update_warehouse_material_order} from "../../../store/warehouse/order/update"
import {Success} from "../../../api"

const update_Warehouse_Material_Order_Reducer = (state=update_warehouse_material_order, action) => {
    switch (action.type) {
        case "UPDATE_WAREHOUSE_MATERIAL_ORDER_0" :return Success('/ware-house/products', 'updated successfully!!!');
        case "UPDATE_WAREHOUSE_MATERIAL_ORDER_39000":toast.error(action.payload); break;
        case "UPDATE_WAREHOUSE_MATERIAL_ORDER_10001":toast.error(action.payload); break;
        case "UPDATE_WAREHOUSE_MATERIAL_ORDER_10000":toast.error(action.payload); break;
        default:return state
    }
}
export default update_Warehouse_Material_Order_Reducer