import { toast } from "react-toastify";
import {receive_products_transfer} from "../../../store/products/transfer/receive"

const receive_Choose_Products_Transfer_Reducer = (state=receive_products_transfer, action) => {
    switch (action.type) {
        case "RECEIVE_PRODUCTS_TRANSFER_0" :return{data:action.payload};
        case "RECEIVE_PRODUCTS_TRANSFER_29006": return toast.error(action.payload);
        case "RECEIVE_PRODUCTS_TRANSFER_29003": return toast.error(action.payload);
        case "RECEIVE_PRODUCTS_TRANSFER_10001":return toast.error(action.payload);
        case "RECEIVE_PRODUCTS_TRANSFER_10000":return toast.error(action.payload);
        default:return state
    }
}
export default receive_Choose_Products_Transfer_Reducer