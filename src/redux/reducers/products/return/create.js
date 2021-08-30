import { toast } from "react-toastify"
import { Success } from "../../../api";
import {create_products_return} from "../../../store/products/return/create"

const create_Products_Return_Reducer = (state=create_products_return, action) => {
    switch(action.type){
        case "CREATE_PRODUCTS_RETURN_0" : return Success("/products/return", "created successfully!!!");
        case "CREATE_PRODUCTS_RETURN_33000": return toast.error(action.payload)
        case "CREATE_PRODUCTS_RETURN_10001" : return toast.error(action.payload)
        case "CREATE_PRODUCTS_RETURN_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_Products_Return_Reducer