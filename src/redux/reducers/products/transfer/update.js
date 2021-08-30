import { toast } from "react-toastify";
import { Success } from "../../../api";
import {update_products_transfer} from "../../../store/products/transfer/update"

const update_Products_Transfer_Reducer = (state=update_products_transfer, action) => {
    switch (action.type) {
        case "UPDATE_PRODUCTS_TRANSFER_0" :return Success("/products/copy-offers", "updated successfully!!!");
        case "UPDATE_PRODUCTS_TRANSFER_29000":toast.error(action.payload); break;
        case "UPDATE_PRODUCTS_TRANSFER_10001":toast.error(action.payload); break;
        case "UPDATE_PRODUCTS_TRANSFER_10000":toast.error(action.payload); break;
        default:return state
    }
}
export default update_Products_Transfer_Reducer