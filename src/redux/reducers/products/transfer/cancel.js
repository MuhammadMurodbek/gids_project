import { toast } from "react-toastify"
import { Success } from "../../../api";
import {cancel_products_transfer} from "../../../store/products/transfer/cancel"

const cancel_Products_Transfer_Reducer = (state=cancel_products_transfer, action) => {
    switch(action.type){
        case "CANCEL_PRODUCTS_TRANSFER_0" : return Success("/products/copy-offers", "canceled successfully!!!");
        case "CANCEL_PRODUCTS_TRANSFER_10001" : return toast.error(action.payload)
        case "CREATE_PRODUCTS_TRANSFER_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default cancel_Products_Transfer_Reducer