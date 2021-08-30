import { toast } from "react-toastify"
import { Success } from "../../../api";
import {create_products_order} from "../../../store/products/order/create"

const create_Products_Order_Reducer = (state=create_products_order, action) => {
    switch(action.type){
        case "CREATE_PRODUCTS_ORDER_0" : return Success("/products/order", "created successfully!!!");
        case "CREATE_PRODUCTS_ORDER_31000": return toast.error(action.payload)
        case "CREATE_PRODUCTS_ORDER_10001" : return toast.error(action.payload)
        case "CREATE_PRODUCTS_ORDER_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_Products_Order_Reducer