import { toast } from "react-toastify"
import {create_products_order_autocomplete} from "../../../store/products/order/order-autocomplete"

const create_Products_Order_AutoComplete_Reducer = (state=create_products_order_autocomplete, action) => {
    switch(action.type){
        case "CREATE_ORDER_AUTOCOMPLETE_0" : return {data: action.payload.data};
        case "CREATE_ORDER_AUTOCOMPLETE_10001" : return toast.error(action.payload)
        case "CREATE_ORDER_AUTOCOMPLETE_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_Products_Order_AutoComplete_Reducer