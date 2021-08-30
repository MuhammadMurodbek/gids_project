import {delete_products_category} from "../../../store/products/category/delete"
import {toast} from "react-toastify"
import { Success } from "../../../api";

const delete_Products_Category_Reducer = (state=delete_products_category, action) => {
    switch (action.type) {
        case "DELETE_PRODUCTS_CATEGORY_0" : return Success("/products/category", "deleted successfully!!!"); 
        case "DELETE_PRODUCTS_CATEGORY_25000": return toast.error(action.payload);
        case "DELETE_PRODUCTS_CATEGORY_10000": return toast.error(action.payload);
        case "DELETE_PRODUCTS_CATEGORY_10001": return toast.error(action.payload);
        default:return state
    }
}
export default delete_Products_Category_Reducer 