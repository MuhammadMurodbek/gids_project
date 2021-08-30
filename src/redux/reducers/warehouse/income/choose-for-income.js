import { toast } from "react-toastify";
import {choose_for_income_warehouse} from "../../../store/warehouse/income/choose-for-income"

const choose_For_Income_Warehouse_Reducer = (state=choose_for_income_warehouse, action) => {
    switch (action.type) {
        case "CHOOSE_FOR_INCOME_WAREHOUSE_0" :return {data: action.payload};
        case "CHOOSE_FOR_INCOME_WAREHOUSE_10001":toast.error(action.payload); break;
        case "CHOOSE_FOR_INCOME_WAREHOUSE_10000":toast.error(action.payload); break;
        default:return state
    }
}
export default choose_For_Income_Warehouse_Reducer