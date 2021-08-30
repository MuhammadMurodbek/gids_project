import { toast } from "react-toastify";
import {get_by_id_sale_discount} from "../../../store/sale/discount/get-by-id"

const get_ById_Sale_Discount_Reducer = (state=get_by_id_sale_discount, action) => {
    switch (action.type) {
        case "GET_BY_ID_SALE_DISCOUNT_0" :return{data:action.payload.data};
        case "GET_BY_ID_SALE_DISCOUNT_10001":return toast.error(action.payload);
        case "GET_BY_ID_SALE_DISCOUNT_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_Sale_Discount_Reducer