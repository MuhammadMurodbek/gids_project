import { toast } from "react-toastify";
import {post_Payment_Create} from "../../../store/sozlamalar/payment/create"

const Success = () => {
    toast.success("Successfully updated !!!")
    window.location.href = "/settings"
}
const post_Payment_Create_Reducer = (state=post_Payment_Create, action) => {
    switch (action.type){
        case 'POST_PAYMENT_CREATE_0': return Success();
        case 'POST_PAYMENT_CREATE_10000': return toast.success("Unknown error 10000");
        case 'POST_PAYMENT_CREATE_10001': return toast.success("Unknown error 10001");
        case 'POST_PAYMENT_CREATE_18001': return toast.success("Unknown error 18001");
        default: return state
    }
}
export default post_Payment_Create_Reducer;