import { toast } from "react-toastify";
import { Success } from "../../../api";
import { update_sale_order } from "../../../store/sale/order/update"

const update_Sale_Order_Reducer = (state = update_sale_order, action) => {
    switch (action.type) {
        case "UPDATE_SALE_ORDER_0": return Success("/sale/order", "updated successfully!!!");
        case "UPDATE_SALE_ORDER_47000": return toast.error(action.payload);
        case "UPDATE_SALE_ORDER_10001": return toast.error(action.payload);
        case "UPDATE_SALE_ORDER_10000": return toast.error(action.payload);
        default: return state
    }
}
export default update_Sale_Order_Reducer