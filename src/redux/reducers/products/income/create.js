import { toast } from "react-toastify"
import { Success } from "../../../api";
import {create_products_income} from "../../../store/products/income/create"

const create_Products_Income_Reducer = (state=create_products_income, action) => {
    switch(action.type){
        case "CREATE_PRODUCTS_INCOME_0" : return Success("/products/income", "created successfully!!!");
        case "CREATE_PRODUCTS_INCOME_10001" : return toast.error(action.payload)
        case "CREATE_PRODUCTS_INCOME_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_Products_Income_Reducer