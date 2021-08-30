import { toast } from "react-toastify";
import {update_products_order} from "../../../store/products/order/update"
import {Success} from "../../../api"

const update_Products_Order_Reducer = (state=update_products_order, action) => {
    switch (action.type) {
        case "UPDATE_PRODUCTS_ORDER_0" :return Success('/products/order', "updated successfully");
        case "UPDATE_PRODUCTS_ORDER_31000":toast.error(action.payload); break;
        case "UPDATE_PRODUCTS_ORDER_10001":toast.error(action.payload); break;
        case "UPDATE_PRODUCTS_ORDER_10000":toast.error(action.payload); break;
        default:return state
    }
}
export default update_Products_Order_Reducer