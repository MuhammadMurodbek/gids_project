import { toast } from "react-toastify";
import {get_by_id_sale_customer} from "../../../store/sale/customer/get-by-id"

const get_ById_Sale_Customer_Reducer = (state=get_by_id_sale_customer, action) => {
    switch (action.type) {
        case "GET_BY_ID_SALE_CUSTOMER_0" :return{data:action.payload.data};
        case "GET_BY_ID_SALE_CUSTOMER_10001":return toast.error(action.payload);
        case "GET_BY_ID_SALE_CUSTOMER_10000":return toast.error(action.payload);
        case "GET_BY_ID_SALE_CUSTOMER_43000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_Sale_Customer_Reducer