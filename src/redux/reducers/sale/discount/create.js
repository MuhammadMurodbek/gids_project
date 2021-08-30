import { toast } from "react-toastify"
import { Success } from "../../../api";
import {create_sale_discount} from "../../../store/sale/discount/create"


const create_Sale_Discount_Reducer = (state=create_sale_discount, action) => {
    switch(action.type){
        case "CREATE_SALE_DISCOUNT_0" : return Success('/stocks', 'created successfully!!!');
        case "CREATE_SALE_DISCOUNT_44000" : return toast.error(action.payload)
        case "CREATE_SALE_DISCOUNT_10001" : return toast.error(action.payload)
        case "CREATE_SALE_DISCOUNT_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_Sale_Discount_Reducer