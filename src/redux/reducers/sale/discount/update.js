import { toast } from "react-toastify";
import { Success } from "../../../api";
import {update_sale_discount} from "../../../store/sale/discount/update"

const update_Sale_Discount_Reducer = (state=update_sale_discount, action) => {
    switch (action.type) {
        case "UPDATE_SALE_DISCOUNT_0" : return Success("/stocks", "updated successfully!!!");
        case "UPDATE_SALE_DISCOUNT_44000" : return toast.error(action.payload);
        case "UPDATE_SALE_DISCOUNT_10001" : return toast.error(action.payload);
        case "UPDATE_SALE_DISCOUNT_10000" : return toast.error(action.payload);
        default : return state
    }
}
export default update_Sale_Discount_Reducer