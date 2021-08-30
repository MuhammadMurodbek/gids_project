import { toast } from "react-toastify";
import {get_by_id_products_product} from "../../../store/products/product/get-by-id"

const get_ById_Products_Product_Reducer = (state=get_by_id_products_product, action) => {
    switch (action.type) {
        case "GET_BY_ID_PRODUCTS_PRODUCT_0" :return{data:action.payload.data};
        case "GET_BY_ID_PRODUCTS_PRODUCT_10001":return toast.error(action.payload);
        case "GET_BY_ID_PRODUCTS_PRODUCT_10000":return toast.error(action.payload);
        case "GET_BY_ID_PRODUCTS_PRODUCT_26000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_Products_Product_Reducer