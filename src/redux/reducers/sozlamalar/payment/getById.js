import { toast } from "react-toastify"
import {getById} from "../../../store/sozlamalar/payment/get-by-id"

const get_Payment_By_Id_Reducer = (state=getById, action) => {
    switch (action.type) {
        case "GET_PAYMENT_BY_ID_0" : return {data:action.payload.data}
        case "GET_PAYMENT_BY_ID_18000": toast.error("Validation error"); break;
        case "GET_PAYMENT_BY_ID_10001":toast.error("Category not found"); break;
        case "GET_PAYMENT_BY_ID_10000":toast.error("Category not found"); break;
        default:return state
    }
}
export default get_Payment_By_Id_Reducer