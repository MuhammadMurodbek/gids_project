import { toast } from "react-toastify";
import {get_paging_products_return} from "../../../store/products/return/get-paging"

const get_Paging_Products_Return_Reducer = (state=get_paging_products_return, action) => {
    switch (action.type) {
        case "GET_PAGING_PRODUCTS_RETURN_0" :return{
            data:action.payload, 
            loading: false
        };
        case "GET_PAGING_PRODUCTS_RETURN_10001":return toast.error(action.payload);
        case "GET_PAGING_PRODUCTS_RETURN_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_Paging_Products_Return_Reducer