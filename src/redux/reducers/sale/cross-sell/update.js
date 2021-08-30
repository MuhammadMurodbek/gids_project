import { toast } from "react-toastify";
import { Success } from "../../../api";
import {update_sale_cross_sell} from  "../../../store/sale/cross-sell/update"

const update_Sale_Cross_Sell_Reducer = (state=update_sale_cross_sell, action) => {
    switch (action.type) {
        case "UPDATE_SALE_CROSS_SELL_0" : return Success("/cross-sell", "updated successfully!!!");
        case "UPDATE_SALE_CROSS_SELL_45000" : return toast.error(action.payload);
        case "UPDATE_SALE_CROSS_SELL_10001" : return toast.error(action.payload);
        case "UPDATE_SALE_CROSS_SELL_10000" : return toast.error(action.payload);
        default : return state
    }
}
export default update_Sale_Cross_Sell_Reducer