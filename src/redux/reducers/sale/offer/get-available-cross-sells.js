import { toast } from "react-toastify";
import {get_available_cross_sells} from "../../../store/sale/offer/get-available-cross-sells"

const get_Available_Cross_Sells_Get_Sale_Offer_Reducer = (state=get_available_cross_sells, action) => {
    switch (action.type) {
        case "GET_AVAILABLE_CROSS_SELLS_SALE_OFFER_0" :return{data:action.payload.data};
        case "GET_AVAILABLE_CROSS_SELLS_SALE_OFFER_10001":return toast.error(action.payload);
        case "GET_AVAILABLE_CROSS_SELLS_SALE_OFFER_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_Available_Cross_Sells_Get_Sale_Offer_Reducer