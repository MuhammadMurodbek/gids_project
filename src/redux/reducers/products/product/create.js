import { toast } from "react-toastify"
import { Success } from "../../../api";
import { create_products_product } from "../../../store/products/product/create"

const create_Products_product_Reducer = (state = create_products_product, action) => {
    switch (action.type) {
        case "CREATE_PRODUCTS_PRODUCT_0": return Success("/products/Main", "created successfully!!!");
        case "CREATE_PRODUCTS_PRODUCT_26000": return toast.error(action.payload)
        case "CREATE_PRODUCTS_PRODUCT_10001": return toast.error(action.payload)
        case "CREATE_PRODUCTS_PRODUCT_10000": return toast.error(action.payload)
        default: return state
    }
}
export default create_Products_product_Reducer