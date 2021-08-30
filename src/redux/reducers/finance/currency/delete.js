import {delete_finance_currency} from "../../../store/finance/currency/delete"
import { Success } from "../../../api"
import { toast } from "react-toastify"

const delete_Finance_Currency_Reducer = (state=delete_finance_currency, action) => {
    switch (action.type) {
        case "DELETE_FINANCE_CURRENCY_0" : return Success("/finance/currency", "deleted successfully!!!"); 
        case "DELETE_FINANCE_CURRENCY_20000": return toast.error(action.payload);
        case "DELETE_FINANCE_CURRENCY_10000": return toast.error(action.payload);
        case "DELETE_FINANCE_CURRENCY_10001": return toast.error(action.payload);
        default:return state
    }
}
export default delete_Finance_Currency_Reducer