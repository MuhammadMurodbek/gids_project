import { toast } from "react-toastify";
import {get_by_id_products_income} from "../../../store/products/income/get-by-id"

const get_ById_Products_Income_Reducer = (state=get_by_id_products_income, action) => {
    switch (action.type) {
        case "GET_BY_ID_PRODUCTS_INCOME_0" :return{data:action.payload.data};
        case "GET_BY_ID_PRODUCTS_INCOME_10001":return toast.error(action.payload);
        case "GET_BY_ID_PRODUCTS_INCOME_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_Products_Income_Reducer