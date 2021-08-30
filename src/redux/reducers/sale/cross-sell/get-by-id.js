import { toast } from "react-toastify";
import {get_by_id_sale_cross_sell} from "../../../store/sale/cross-sell/get-by-id"

const get_ById_Sale_Cross_Sell_Reducer = (state=get_by_id_sale_cross_sell, action) => {
    switch (action.type) {
        case "GET_BY_ID_SALE_CROSS_SELL_0" :return{data:action.payload.data};
        case "GET_BY_ID_SALE_CROSS_SELL_10001":return toast.error(action.payload);
        case "GET_BY_ID_SALE_CROSS_SELL_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_Sale_Cross_Sell_Reducer