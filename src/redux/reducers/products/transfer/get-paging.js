import { toast } from "react-toastify";
import {get_paging_products_transfer} from "../../../store/products/transfer/get-paging"

const get_Paging_Products_Transfer_Reducer = (state=get_paging_products_transfer, action) => {
    switch (action.type) {
        case "GET_PAGING_PRODUCTS_TRANSFER_0" :return{data:action.payload, loading: false};
        case "GET_PAGING_PRODUCTS_TRANSFER_10001":return toast.error(action.payload);
        case "GET_PAGING_PRODUCTS_TRANSFER_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_Paging_Products_Transfer_Reducer