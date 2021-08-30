import { toast } from "react-toastify"
import {updatePayment} from "../../../store/sozlamalar/payment/update"

const Success = () => {
    toast.success("Successfully updated")
    window.location.href="/settings"
}
const update_Payment_Data_Reducer = (state=updatePayment, action) => {
    switch (action.type) {
        case "UPDATE_PAYMENT_DATA_ID_0" : return Success();
        case "UPDATE_PAYMENT_DATA_ID_10000": return toast.error("Invalid error")
        case "UPDATE_PAYMENT_DATA_ID_10001":return toast.error("Validation error")
        case "UPDATE_PAYMENT_DATA_ID_18001":return toast.error("Validation error")
        case "UPDATE_PAYMENT_DATA_ID_18000":return toast.error("Category not found")
        default:return state
    }
}
export default update_Payment_Data_Reducer