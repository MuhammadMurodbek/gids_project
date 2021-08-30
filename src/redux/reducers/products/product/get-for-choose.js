import { toast } from "react-toastify";
import {get_for_choose_products_product} from "../../../store/products/product/get-for-choose"

const get_For_Choose_Products_Product_Reducer = (state=get_for_choose_products_product, action) => {
    switch (action.type) {
        case "GET_FOR_CHOOSE_PRODUCTS_PRODUCT_0" :return{data:action.payload};
        case "GET_FOR_CHOOSE_PRODUCTS_PRODUCT_10001":return toast.error(action.payload);
        case "GET_FOR_CHOOSE_PRODUCTS_PRODUCT_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_For_Choose_Products_Product_Reducer