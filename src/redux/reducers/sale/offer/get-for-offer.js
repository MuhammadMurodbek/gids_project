import { toast } from "react-toastify";
import {get_for_offer_sale} from "../../../store/sale/offer/get-for-offer"

const get_For_Offer_Sale_Reducer = (state=get_for_offer_sale, action) => {
    switch (action.type) {
        case "GET_FOR_OFFER_SALE_0" :return{data:action.payload.data};
        case "GET_FOR_OFFER_SALE_26000": return toast.error(action.payload);
        case "GET_FOR_OFFER_SALE_10001":return toast.error(action.payload);
        case "GET_FOR_OFFER_SALE_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_For_Offer_Sale_Reducer
// get_For_Offer_Sale_Reducer