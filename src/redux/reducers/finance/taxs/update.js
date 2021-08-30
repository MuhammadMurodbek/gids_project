import { toast } from "react-toastify";
import {update_finance_taxs} from "../../../store/finance/taxs/update"
import { Success } from "../../../api";

const update_Finance_taxs_Reducer = (state=update_finance_taxs, action) => {
    switch (action.type) {
        case "UPDATE_FINANCE_TAXS_0" :return Success("/finance/taxs", "update successfully!!!");
        case "UPDATE_FINANCE_TAXS_19001":toast.error(action.payload); break;
        case "UPDATE_FINANCE_TAXS_19000":toast.error(action.payload); break;
        case "UPDATE_FINANCE_TAXS_10001":toast.error(action.payload); break;
        case "UPDATE_FINANCE_TAXS_10000":toast.error(action.payload); break;
        default:return state
    }
}
export default update_Finance_taxs_Reducer