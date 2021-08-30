import { toast } from "react-toastify";
import {get_by_id_finance_currency} from "../../../store/finance/currency/get-by-id"

const get_ById_Finance_Currency_Reducer = (state=get_by_id_finance_currency, action) => {
    switch (action.type) {
        case "GET_BY_ID_FINANCE_CURRENCY_0" :return{data:action.payload.data};
        case "GET_BY_ID_FINANCE_CURRENCY_10001":return toast.error(action.payload);
        case "GET_BY_ID_FINANCE_CURRENCY_10000":return toast.error(action.payload);
        case "GET_BY_ID_FINANCE_CURRENCY_19000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_Finance_Currency_Reducer