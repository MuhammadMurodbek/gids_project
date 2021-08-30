import { toast } from "react-toastify";
import {choose_for_return_products} from "../../../store/products/return/choose-for-return"

const choose_For_Return_Products_Reducer = (state=choose_for_return_products, action) => {
    switch (action.type) {
        case "CHOOSE_FOR_RETURN_PRODUCTS_0" :return{data:action.payload};
        case "CHOOSE_FOR_RETURN_PRODUCTS_10001":return toast.error(action.payload);
        case "CHOOSE_FOR_RETURN_PRODUCTS_10000":return toast.error(action.payload);
        default:return state
    }
}
export default choose_For_Return_Products_Reducer