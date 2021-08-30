import { toast } from "react-toastify";
import {get_paging_products_category} from "../../../store/products/category/get-paging"

const get_Paging_Products_Category_Reducer = (state=get_paging_products_category, action) => {
    switch (action.type) {
        case "GET_PAGING_PRODUCTS_CATEGORY_0" :return{data:action.payload, loading: false};
        case "GET_PAGING_PRODUCTS_CATEGORY_10001":return toast.error(action.payload);
        case "GET_PAGING_PRODUCTS_CATEGORY_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_Paging_Products_Category_Reducer