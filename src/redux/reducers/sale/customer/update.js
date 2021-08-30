import { toast } from "react-toastify";
import { Success } from "../../../api";
import {update_sale_customer} from "../../../store/sale/customer/update"

const update_Sale_Customer_Reducer = (state=update_sale_customer, action) => {
    switch (action.type) {
        case "UPDATE_SALE_CUSTOMER_0" : return Success("/customers", "updated successfully!!!");
        case "UPDATE_SALE_CUSTOMER_43000" : return toast.error(action.payload);
        case "UPDATE_SALE_CUSTOMER_10001" : return toast.error(action.payload);
        case "UPDATE_SALE_CUSTOMER_10000" : return toast.error(action.payload);
        default : return state
    }
}
export default update_Sale_Customer_Reducer