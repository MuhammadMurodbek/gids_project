import { toast } from "react-toastify";
import {get_by_id_finance_taxs} from "../../../store/finance/taxs/get-by-id"

const get_ById_Finance_Taxs_Reducer = (state=get_by_id_finance_taxs, action) => {
    switch (action.type) {
        case "GET_BY_ID_FINANCE_TAXS_0" :return{data:action.payload.data};
        case "GET_BY_ID_FINANCE_TAXS_10001":return toast.error(action.payload);
        case "GET_BY_ID_FINANCE_TAXS_10000":return toast.error(action.payload);
        case "GET_BY_ID_FINANCE_TAXS_20000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_Finance_Taxs_Reducer