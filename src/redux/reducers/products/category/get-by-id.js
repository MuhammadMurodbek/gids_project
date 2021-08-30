import { toast } from "react-toastify";
import {get_by_id_products_category} from "../../../store/products/category/get-by-id"

const get_ById_Products_Category_Reducer = (state=get_by_id_products_category, action) => {
    switch (action.type) {
        case "GET_BY_ID_PRODUCTS_CATEGORY_0" :return{data:action.payload.data};
        case "GET_BY_ID_PRODUCTS_CATEGORY_10001":return toast.error(action.payload);
        case "GET_BY_ID_PRODUCTS_CATEGORY_10000":return toast.error(action.payload);
        case "GET_BY_ID_PRODUCTS_CATEGORY_23000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_Products_Category_Reducer