import { toast } from "react-toastify";
import {get_All_finance_taxs} from "../../../store/finance/taxs/get-all"

const get_All_Finance_Taxs_Reducer = (state=get_All_finance_taxs, action) => {
    switch (action.type) {
        case "GET_ALL_FINANCE_TAXS_0" :return{data:action.payload, loading: false};
        case "GET_ALL_FINANCE_TAXS_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_All_Finance_Taxs_Reducer