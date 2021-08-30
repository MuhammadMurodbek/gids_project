import { toast } from "react-toastify";
import {get_by_number_sale_offer} from "../../../store/sale/offer/get-by-number"

const get_by_Number_Sale_Offer_Reducer = (state=get_by_number_sale_offer, action) => {
    switch (action.type) {
        case "GET_BY_NUMBER_SALE_OFFER_0" :return{data:action.payload.data};
        case "GET_BY_NUMBER_SALE_OFFER_10001":return toast.error(action.payload);
        case "GET_BY_NUMBER_SALE_OFFER_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_by_Number_Sale_Offer_Reducer