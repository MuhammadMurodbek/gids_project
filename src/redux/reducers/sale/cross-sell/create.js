import { toast } from "react-toastify"
import { Success } from "../../../api";
import {create_sale_cross_sell} from "../../../store/sale/cross-sell/create"


const create_Sale_Cross_Sell_Reducer = (state=create_sale_cross_sell, action) => {
    switch(action.type){
        case "CREATE_SALE_CROSS_SELL_0" : return Success("/cross-sell", "created successfully!!!");
        case "CREATE_SALE_CROSS_SELL_45000" : return toast.error(action.payload)
        case "CREATE_SALE_CROSS_SELL_10001" : return toast.error(action.payload)
        case "CREATE_SALE_CROSS_SELL_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_Sale_Cross_Sell_Reducer