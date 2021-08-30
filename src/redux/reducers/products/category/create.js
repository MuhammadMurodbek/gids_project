import { toast } from "react-toastify"
import { Success } from "../../../api";
import {create_products_category} from "../../../store/products/category/create"

const create_Products_Category_Reducer = (state=create_products_category, action) => {
    switch(action.type){
        case "CREATE_PRODUCTS_CATEGORY_0" : return Success("/products/category", "created successfully!!!");
        case "CREATE_PRODUCTS_CATEGORY_25000": return toast.error(action.payload)
        case "CREATE_PRODUCTS_CATEGORY_10001" : return toast.error(action.payload)
        case "CREATE_PRODUCTS_CATEGORY_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_Products_Category_Reducer