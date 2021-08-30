import { toast } from "react-toastify";
import {update_finance_currency} from "../../../store/finance/currency/update"

const Success = () => {
    toast.success("Update Succesfully")
    window.location.href="/finance/currency"
}

const update_Finance_Currency_Reducer = (state=update_finance_currency, action) => {
    switch (action.type) {
        case "UPDATE_FINANCE_CURRENCY_0" :return Success();
        case "UPDATE_FINANCE_CURRENCY_19001":toast.error(action.payload); break;
        case "UPDATE_FINANCE_CURRENCY_19000":toast.error(action.payload); break;
        case "UPDATE_FINANCE_CURRENCY_10001":toast.error(action.payload); break;
        case "UPDATE_FINANCE_CURRENCY_10000":toast.error(action.payload); break;
        default:return state
    }
}
export default update_Finance_Currency_Reducer