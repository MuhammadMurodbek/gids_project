import { toast } from "react-toastify"
import {products_income_autocomplete} from "../../../store/products/income/income-autocomplete"

const create_Products_Income_AutoComplete_Reducer = (state=products_income_autocomplete, action) => {
    switch(action.type){
        case "CREATE_INCOME_AUTOCOMPLETE_0" : return {data: action.payload};
        case "CREATE_INCOME_AUTOCOMPLETE_10001" : return toast.error(action.payload)
        case "CREATE_INCOME_AUTOCOMPLETE_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_Products_Income_AutoComplete_Reducer