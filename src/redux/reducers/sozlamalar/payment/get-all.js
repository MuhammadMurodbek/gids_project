import { toast } from "react-toastify";
import {get_Payment_All} from "../../../store/sozlamalar/payment/get-all"

const get_Payment_All_Reducer = (state=get_Payment_All, action) => {
    switch (action.type){
        case 'GET_PAYMENT_ALL_0': return {data:action.payload.data};
        case 'GET_PAYMENT_ALL_10000': return toast.error("get all payment requests failed");
        default: return state
    }
}
export default get_Payment_All_Reducer;