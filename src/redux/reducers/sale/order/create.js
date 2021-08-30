import { toast } from "react-toastify"
import { Success } from "../../../api";
import { create_sale_order } from "../../../store/sale/order/create"


const create_Sale_Order_Reducer = (state = create_sale_order, action) => {
    switch (action.type) {
        case "CREATE_SALE_ORDER_0": return {data: action.payload};
        case "CREATE_SALE_ORDER_47000": return toast.error(action.payload)
        case "CREATE_SALE_ORDER_10001": return toast.error(action.payload)
        case "CREATE_SALE_ORDER_10000": return toast.error(action.payload)
        default: return state
    }
}
export default create_Sale_Order_Reducer