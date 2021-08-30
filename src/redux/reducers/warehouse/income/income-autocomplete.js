import { toast } from "react-toastify";
import {income_autocomplete_warehouse} from "../../../store/warehouse/income/income-autocomplete"

const income_Autocomplete_Warehouse_Reducer = (state=income_autocomplete_warehouse, action) => {
    switch (action.type) {
        case "INCOME_AUTOCOMPLETE_WAREHOUSE_0" :return{data:action.payload.data, loading: false};
        case "INCOME_AUTOCOMPLETE_WAREHOUSE_10001":return toast.error(action.payload);
        case "INCOME_AUTOCOMPLETE_WAREHOUSE_10000":return toast.error(action.payload);
        default:return state
    }
}
export default income_Autocomplete_Warehouse_Reducer