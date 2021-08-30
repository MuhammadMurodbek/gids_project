import {delete_finance_taxs} from "../../../store/finance/taxs/delete"
import {toast} from "react-toastify"
import { Success } from "../../../api";

const delete_Finance_Taxs_Reducer = (state=delete_finance_taxs, action) => {
    switch (action.type) {
        case "DELETE_FINANCE_TAXS_0" : return Success("/finance/taxs", "deleted successfully!!!"); 
        case "DELETE_FINANCE_TAXS_20000": return toast.error(action.payload);
        case "DELETE_FINANCE_TAXS_10000": return toast.error(action.payload);
        case "DELETE_FINANCE_TAXS_10001": return toast.error(action.payload);
        default:return state
    }
}
export default delete_Finance_Taxs_Reducer 