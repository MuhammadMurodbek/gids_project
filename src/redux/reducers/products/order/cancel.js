import { toast } from "react-toastify"
import { Success } from "../../../api";
import {cancel_products_order} from "../../../store/products/order/cancel"

const cancel_Products_Order_Reducer = (state=cancel_products_order, action) => {
    switch(action.type){
        case "CANCEL_PRODUCTS_ORDER_0" : return Success("/products/order", "canceled successfully!!!");
        case "CANCEL_PRODUCTS_ORDER_31003" : return toast.error(action.payload)
        case "CANCEL_PRODUCTS_ORDER_10001" : return toast.error(action.payload)
        case "CANCEL_PRODUCTS_ORDER_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default cancel_Products_Order_Reducer