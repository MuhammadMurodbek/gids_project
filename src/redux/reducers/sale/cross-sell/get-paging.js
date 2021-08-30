import { toast } from "react-toastify";
import {get_paging_sale_cross_sell} from "../../../store/sale/cross-sell/get-paging"

const get_Paging_Sale_Cross_Sell_Reducer = (state=get_paging_sale_cross_sell, action) => {
    switch (action.type) {
        case "GET_PAGING_SALE_CROSS_SELL_0" :return{data:action.payload, loading: false};
        case "GET_PAGING_SALE_CROSS_SELL_10001":return toast.error(action.payload);
        case "GET_PAGING_SALE_CROSS_SELL_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_Paging_Sale_Cross_Sell_Reducer