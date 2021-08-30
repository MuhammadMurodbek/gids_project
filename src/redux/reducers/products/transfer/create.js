import { toast } from "react-toastify"
import { Success } from "../../../api";
import {create_products_transfer} from "../../../store/products/transfer/create"

const create_Products_Transfer_Reducer = (state=create_products_transfer, action) => {
    switch(action.type){
        case "CREATE_PRODUCTS_TRANSFER_0" : return Success("/products/copy-offers", "created successfully!!!");
        case "CREATE_PRODUCTS_TRANSFER_29000": return toast.error(action.payload)
        case "CREATE_PRODUCTS_TRANSFER_10001" : return toast.error(action.payload)
        case "CREATE_PRODUCTS_TRANSFER_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_Products_Transfer_Reducer