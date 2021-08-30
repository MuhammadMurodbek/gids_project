import { toast } from "react-toastify"
import {order_autocomplete_warehouse_material} from "../../../store/warehouse/order/order-autocomplete"

const order_Autocomplete_Warehouse_Material_Reducer = (state=order_autocomplete_warehouse_material, action) => {
    switch(action.type){
        case "ORDER_AUTOCOMPLETE_WAREHOUSE_MATERIAL_0" : return {data: action.payload.data};
        case "ORDER_AUTOCOMPLETE_WAREHOUSE_MATERIAL_10001" : return toast.error(action.payload)
        case "ORDER_AUTOCOMPLETE_WAREHOUSE_MATERIAL_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default order_Autocomplete_Warehouse_Material_Reducer