import { toast } from "react-toastify";
import { Success } from "../../../api";
import { delete_sale_contract } from "../../../store/sale/contract/delete"

const delete_Sale_Contract_Reducer = (state = delete_sale_contract, action) => {
    switch (action.type) {
        case "DELETE_SALE_CONTRACT_0": return Success("/sale-offers", "deleted successfully!!!");
        case "DELETE_SALE_CONTRACT_10001": return toast.error(action.payload);
        case "DELETE_SALE_CONTRACT_10000": return toast.error(action.payload);
        default: return state
    }
}
export default delete_Sale_Contract_Reducer