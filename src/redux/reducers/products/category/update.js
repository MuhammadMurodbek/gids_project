import { toast } from "react-toastify";
import { Success } from "../../../api";
import {update_products_category} from "../../../store/products/category/update"

const update_Products_Product_Reducer = (state=update_products_category, action) => {
    switch (action.type) {
        case "UPDATE_PRODUCTS_CATEGORY_0" :return Success("/products/category", "updated successfully!!!");
        case "UPDATE_PRODUCTS_CATEGORY_25001":toast.error(action.payload); break;
        case "UPDATE_PRODUCTS_CATEGORY_25000":toast.error(action.payload); break;
        case "UPDATE_PRODUCTS_CATEGORY_13000":toast.error(action.payload); break;
        case "UPDATE_PRODUCTS_CATEGORY_10001":toast.error(action.payload); break;
        case "UPDATE_PRODUCTS_CATEGORY_10000":toast.error(action.payload); break;
        default:return state
    }
}
export default update_Products_Product_Reducer