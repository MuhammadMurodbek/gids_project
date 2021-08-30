import { toast } from "react-toastify"
import {choose_for_order_warehouse_material} from "../../../store/warehouse/order/choose-for-order"

const choose_For_Order_Warehouse_Material_Reducer = (state=choose_for_order_warehouse_material, action) => {
    switch(action.type){
        case "WAREHOUSE_MATERIAL_CHOOSE_FOR_ORDER_0" : return {data: action.payload};
        case "WAREHOUSE_MATERIAL_CHOOSE_FOR_ORDER_10001": return toast.error(action.payload)
        case "WAREHOUSE_MATERIAL_CHOOSE_FOR_ORDER_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default choose_For_Order_Warehouse_Material_Reducer