import { toast } from "react-toastify"
import { Success } from "../../../api";
import { create_sale_contract } from "../../../store/sale/contract/create"


const create_Sale_Contract_Reducer = (state = create_sale_contract, action) => {
    switch (action.type) {
        case "CREATE_SALE_CONTRACT_0": return Success("/sale-offers", "created successfully!!!");
        case "CREATE_SALE_CONTRACT_47000": return toast.error(action.payload)
        case "CREATE_SALE_CONTRACT_10001": return toast.error(action.payload)
        case "CREATE_SALE_CONTRACT_10000": return toast.error(action.payload)
        default: return state
    }
}
export default create_Sale_Contract_Reducer