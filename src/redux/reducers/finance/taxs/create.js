import { toast } from "react-toastify"
import {create_finance_taxs} from "../../../store/finance/taxs/create"

const Success = () => {
    toast.success("Successfully created finance taxs !!!")
    window.location.href="/finance/taxs"
}
const create_Finance_Taxs_Reducer = (state=create_finance_taxs, action) => {
    switch(action.type){
        case "CREATE_FINANCE_TAXS_0" : Success();break;
        case "CREATE_FINANCE_TAXS_20001" : return toast.error(action.payload)
        case "CREATE_FINANCE_TAXS_10001" : return toast.error(action.payload)
        case "CREATE_FINANCE_TAXS_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_Finance_Taxs_Reducer