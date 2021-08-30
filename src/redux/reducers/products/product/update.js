import { toast } from "react-toastify";
import { Success } from "../../../api";
import {update_products_product} from "../../../store/products/product/update"

const update_Products_Product_Reducer = (state=update_products_product, action) => {
    switch (action.type) {
        case "UPDATE_PRODUCTS_PRODUCT_0" :return Success("/products/Main", "updated successfully!!!");
        case "UPDATE_PRODUCTS_PRODUCT_26000":toast.error(action.payload); break;
        case "UPDATE_PRODUCTS_PRODUCT_10001":toast.error(action.payload); break;
        case "UPDATE_PRODUCTS_PRODUCT_10000":toast.error(action.payload); break;
        default:return state
    }
}
export default update_Products_Product_Reducer