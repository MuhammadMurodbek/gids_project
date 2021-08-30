import { toast } from "react-toastify";
import {get_by_id_warehouse_income} from "../../../store/warehouse/income/get-by-id"

const get_ById_WareHouse_Income_Reducer = (state=get_by_id_warehouse_income, action) => {
    switch (action.type) {
        case "GET_BY_ID_WAREHOUSE_INCOME_0" :return{data:action.payload.data};
        case "GET_BY_ID_WAREHOUSE_INCOME_10001":return toast.error(action.payload);
        case "GET_BY_ID_WAREHOUSE_INCOME_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_WareHouse_Income_Reducer