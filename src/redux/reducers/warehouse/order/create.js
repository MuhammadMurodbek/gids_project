import { toast } from "react-toastify"
import { Success } from "../../../api";
import {create_warehouse_material_order} from "../../../store/warehouse/order/create"

const create_Warehouse_Material_Order_Reducer = (state=create_warehouse_material_order, action) => {
    switch(action.type){
        case "CREATE_WAREHOUSE_MATERIAL_ORDER_0" : return Success("/ware-house/products", "created successfully!!!");
        case "CREATE_WAREHOUSE_MATERIAL_ORDER_39000": return toast.error(action.payload)
        case "CREATE_WAREHOUSE_MATERIAL_ORDER_10001" : return toast.error(action.payload)
        case "CREATE_WAREHOUSE_MATERIAL_ORDER_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_Warehouse_Material_Order_Reducer