import { toast } from "react-toastify";
import {counter_get_sale_offer} from "../../../store/sale/offer/counter-get"

const counter_Get_Sale_Offer_Reducer = (state=counter_get_sale_offer, action) => {
    switch (action.type) {
        case "COUNTER_GET_SALE_OFFER_0" :return{data:action.payload.data};
        case "COUNTER_GET_SALE_OFFER_10001":return toast.error(action.payload);
        case "COUNTER_GET_SALE_OFFER_10000":return toast.error(action.payload);
        default:return state
    }
}
export default counter_Get_Sale_Offer_Reducer