import { toast } from "react-toastify";
import {get_paging_products_product} from "../../../store/products/product/get-paging"

const get_Paging_Products_Product_Reducer = (state=get_paging_products_product, action) => {
    switch (action.type) {
        case "GET_PAGING_PRODUCTS_PRODUCT_0" :return{data:action.payload.data, loading: false};
        case "GET_PAGING_PRODUCTS_PRODUCT_10001":return toast.error(action.payload);
        case "GET_PAGING_PRODUCTS_PRODUCT_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_Paging_Products_Product_Reducer