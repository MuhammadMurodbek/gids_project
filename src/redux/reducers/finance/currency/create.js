import { toast } from "react-toastify"
import {create_Finance_Currency} from "../../../store/finance/currency/create"

const Success = () => {
    toast.success("Successfully created finance currency !!!")
    window.location.href="/finance/currency"
}
const create_Finance_Currency_Reducer = (state=create_Finance_Currency, action) => {
    switch(action.type){
        case "CREATE_FINANCE_CURRENCY_0" : Success();break;
        case "CREATE_FINANCE_CURRENCY_20001" : return toast.error(action.payload)
        case "CREATE_FINANCE_CURRENCY_10001" : return toast.error(action.payload)
        case "CREATE_FINANCE_CURRENCY_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_Finance_Currency_Reducer