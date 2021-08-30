import {delete_payment} from "../../../store/sozlamalar/payment/delete"
import {toast} from "react-toastify"

const delete_Payment_Many_Reducer = (state=delete_payment, action) => {
    switch (action.type) {
        case "DELETE_PAYMENT_MANY_0" : toast.success("deleted successfully !! payment"); break; 
        case "DELETE_PAYMENT_MANY_10001": toast.error("10000 error device"); break;
        case "DELETE_PAYMENT_MANY_10000": toast.error("10001 error ddd"); break;
        default:return state
    }
}
export default delete_Payment_Many_Reducer