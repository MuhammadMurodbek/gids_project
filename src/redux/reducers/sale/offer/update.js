import { toast } from "react-toastify";
import { Success } from "../../../api";
import { update_sale_offer } from "../../../store/sale/offer/update"

const update_Sale_Offer_Reducer = (state = update_sale_offer, action) => {
    switch (action.type) {
        case "UPDATE_SALE_OFFER_0": return Success("/sale-offers", "updated successfully!!!");
        case "UPDATE_SALE_OFFER_47000": return toast.error(action.payload);
        case "UPDATE_SALE_OFFER_10001": return toast.error(action.payload);
        case "UPDATE_SALE_OFFER_10000": return toast.error(action.payload);
        default: return state
    }
}
export default update_Sale_Offer_Reducer