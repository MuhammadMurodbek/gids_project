import { toast } from "react-toastify";
import {get_All_Finance_Currency} from "../../../store/finance/currency/get-all"

const get_All_Finance_Currency_Reducer = (state=get_All_Finance_Currency, action) => {
    switch (action.type) {
        case "GET_ALL_FINANCE_CURRENCY_0" :
            return{
                data:action.payload,
                loading: false
            };
        case "GET_ALL_FINANCE_CURRENCY_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_All_Finance_Currency_Reducer