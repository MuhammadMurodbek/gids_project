import { toast } from "react-toastify";
import { Success } from "../../../api";
import {receive_products_order} from "../../../store/products/order/receive"

const receive_Choose_Products_Order_Reducer = (state=receive_products_order, action) => {
    switch (action.type) {
        case "RECEIVE_PRODUCTS_ORDER_0" :return Success('/products/order',"Saved successfully !!!");
        case "RECEIVE_PRODUCTS_ORDER_31003": return toast.error(action.payload);
        case "RECEIVE_PRODUCTS_ORDER_10001":return toast.error(action.payload);
        case "RECEIVE_PRODUCTS_ORDER_10000":return toast.error(action.payload);
        default:return state
    }
}
export default receive_Choose_Products_Order_Reducer