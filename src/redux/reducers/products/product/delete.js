import {delete_products_product} from "../../../store/products/product/delete"
import {toast} from "react-toastify"
import { Success } from "../../../api";

const delete_Products_Product_Reducer = (state=delete_products_product, action) => {
    switch (action.type) {
        case "DELETE_PRODUCTS_PRODUCT_0" : return Success("/products/Main", "deleted successfully!!!");
        case "DELETE_PRODUCTS_PRODUCT_26000": return toast.error(action.payload);
        case "DELETE_PRODUCTS_PRODUCT_10001": return toast.error(action.payload);
        case "DELETE_PRODUCTS_PRODUCT_10000": return toast.error(action.payload);
        default:return state
    }
}
export default delete_Products_Product_Reducer 