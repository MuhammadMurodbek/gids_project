import { toast } from "react-toastify";
import { Success } from "../../../api";
import {receive_warehouse_material_order} from "../../../store/warehouse/order/receive"

const receive_warehouse_Material_Order_Reducer = (state=receive_warehouse_material_order, action) => {
    switch (action.type) {
        case "RECEIVE_WAREHOUSE_MATERIAL_ORDER_0" :return Success('/ware-house/products','Saved successfully !!!');
        case "RECEIVE_WAREHOUSE_MATERIAL_ORDER_39003": return toast.error(action.payload);
        case "RECEIVE_WAREHOUSE_MATERIAL_ORDER_10001":return toast.error(action.payload);
        case "RECEIVE_WAREHOUSE_MATERIAL_ORDER_10000":return toast.error(action.payload);
        default:return state
    }
}
export default receive_warehouse_Material_Order_Reducer