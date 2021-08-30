import { toast } from "react-toastify";
import {get_paging_sale_customer} from "../../../store/sale/customer/get-paging"

const get_Paging_Sale_Customer_Reducer = (state=get_paging_sale_customer, action) => {
    switch (action.type) {
        case "GET_PAGING_SALE_CUSTOMER_0" :return{data:action.payload, loading: false};
        case "GET_PAGING_SALE_CUSTOMER_43000" : return toast.error(action.payload);
        case "GET_PAGING_SALE_CUSTOMER_10001":return toast.error(action.payload);
        case "GET_PAGING_SALE_CUSTOMER_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_Paging_Sale_Customer_Reducer