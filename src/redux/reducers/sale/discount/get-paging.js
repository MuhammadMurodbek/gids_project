import { toast } from "react-toastify";
import {get_paging_sale_discount} from "../../../store/sale/discount/get-paging"

const get_Paging_Sale_Discount_Reducer = (state=get_paging_sale_discount, action) => {
    switch (action.type) {
        case "GET_PAGING_SALE_DISCOUNT_0" :return{data:action.payload, loading: false};
        case "GET_PAGING_SALE_DISCOUNT_43000" : return toast.error(action.payload);
        case "GET_PAGING_SALE_DISCOUNT_10001":return toast.error(action.payload);
        case "GET_PAGING_SALE_DISCOUNT_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_Paging_Sale_Discount_Reducer