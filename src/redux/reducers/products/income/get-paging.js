import { toast } from "react-toastify";
import {get_paging_products_income} from "../../../store/products/income/get-paging"

const get_Paging_Products_Income_Reducer = (state=get_paging_products_income, action) => {
    switch (action.type) {
        case "GET_PAGING_PRODUCTS_INCOME_0" :return{data:action.payload.data};
        case "GET_PAGING_PRODUCTS_INCOME_10001":return toast.error(action.payload);
        case "GET_PAGING_PRODUCTS_INCOME_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_Paging_Products_Income_Reducer