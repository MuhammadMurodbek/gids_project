import { toast } from "react-toastify";
import {get_by_id_sale_contract} from "../../../store/sale/contract/get-by-id"

const get_ById_Sale_Contract_Reducer = (state=get_by_id_sale_contract, action) => {
    switch (action.type) {
        case "GET_BY_ID_SALE_CONTRACT_0" :return{data:action.payload.data};
        case "GET_BY_ID_SALE_CONTRACT_10001":return toast.error(action.payload);
        case "GET_BY_ID_SALE_CONTRACT_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_Sale_Contract_Reducer