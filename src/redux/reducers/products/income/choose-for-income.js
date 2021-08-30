import { toast } from "react-toastify"
import {products_choose_for_income} from "../../../store/products/income/choose-for-income"

const create_Choose_For_Income_Reducer = (state=products_choose_for_income, action) => {
    switch(action.type){
        case "CREATE_CHOOSE_FOR_INCOME_0" : return {data: action.payload};
        case "CREATE_CHOOSE_FOR_INCOME_10001" : return toast.error(action.payload)
        case "CREATE_CHOOSE_FOR_INCOME_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_Choose_For_Income_Reducer