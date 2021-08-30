import { toast } from "react-toastify";
import {get_by_id_products_order} from "../../../store/products/order/get-by-id"

const get_ById_Products_Order_Reducer = (state=get_by_id_products_order, action) => {
    switch (action.type) {
        case "GET_BY_ID_PRODUCTS_ORDER_0" :return{data:action.payload.data};
        case "GET_BY_ID_PRODUCTS_ORDER_10001":return toast.error(action.payload);
        case "GET_BY_ID_PRODUCTS_ORDER_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_Products_Order_Reducer