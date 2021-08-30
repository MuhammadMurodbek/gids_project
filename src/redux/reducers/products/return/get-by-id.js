import { toast } from "react-toastify";
import {get_by_id_products_return} from "../../../store/products/return/get-by-id"

const get_ById_Products_Return_Reducer = (state=get_by_id_products_return, action) => {
    switch (action.type) {
        case "GET_BY_ID_PRODUCTS_RETURN_0" :return{data:action.payload.data};
        case "GET_BY_ID_PRODUCTS_RETURN_10001":return toast.error(action.payload);
        case "GET_BY_ID_PRODUCTS_RETURN_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_Products_Return_Reducer