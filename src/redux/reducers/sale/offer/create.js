import { toast } from "react-toastify"
import { Success } from "../../../api";
import {create_sale_offer} from "../../../store/sale/offer/create"


const create_Sale_Offer_Reducer = (state=create_sale_offer, action) => {
    switch(action.type){
        case "CREATE_SALE_OFFER_0" : return Success("/sale-offers", "created successfully!!!");
        case "CREATE_SALE_OFFER_47000" : return toast.error(action.payload)
        case "CREATE_SALE_OFFER_10001" : return toast.error(action.payload)
        case "CREATE_SALE_OFFER_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_Sale_Offer_Reducer