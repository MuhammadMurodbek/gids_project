import { toast } from "react-toastify";
import { get_paging_sale_offer } from "../../../store/sale/offer/get-paging"

const get_Paging_Sale_Offer_Reducer = (state = get_paging_sale_offer, action) => {
    switch (action.type) {
        case "GET_PAGING_SALE_OFFER_0": return { data: action.payload, loading: false };
        case "GET_PAGING_SALE_OFFER_10001": return toast.error(action.payload);
        case "GET_PAGING_SALE_OFFER_10000": return toast.error(action.payload);
        default: return state
    }
}
export default get_Paging_Sale_Offer_Reducer