import { toast } from "react-toastify"
import { Success } from "../../../api";
import {create_sale_customer} from "../../../store/sale/customer/create"


const create_Sale_Customer_Reducer = (state=create_sale_customer, action) => {
    switch(action.type){
        case "CREATE_SALE_CUSTOMER_0" : return Success("/customers", "created successfully!!!");
        case "CREATE_SALE_CUSTOMER_43000" : return toast.error(action.payload)
        case "CREATE_SALE_CUSTOMER_10001" : return toast.error(action.payload)
        case "CREATE_SALE_CUSTOMER_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_Sale_Customer_Reducer