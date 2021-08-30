import { toast } from "react-toastify";
import {get_by_id_warehouse_material_order} from "../../../store/warehouse/order/get-by-id"

const get_ById_Warehouse_Material_Order_Reducer = (state=get_by_id_warehouse_material_order, action) => {
    switch (action.type) {
        case "GET_BY_ID_WAREHOUSE_MATERIAL_ORDER_0" :return{data:action.payload.data};
        case "GET_BY_ID_WAREHOUSE_MATERIAL_ORDER_10001":return toast.error(action.payload);
        case "GET_BY_ID_WAREHOUSE_MATERIAL_ORDER_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_Warehouse_Material_Order_Reducer