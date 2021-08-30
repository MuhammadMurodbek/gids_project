import { toast } from "react-toastify";
import { get_paging_sale_contract } from "../../../store/sale/contract/get-paging"

const get_Paging_Sale_Contract_Reducer = (state = get_paging_sale_contract, action) => {
    switch (action.type) {
        case "GET_PAGING_SALE_CONTRACT_0": return { data: action.payload, loading: false };
        case "GET_PAGING_SALE_CONTRACT_10001": return toast.error(action.payload);
        case "GET_PAGING_SALE_CONTRACT_10000": return toast.error(action.payload);
        default: return state
    }
}
export default get_Paging_Sale_Contract_Reducer