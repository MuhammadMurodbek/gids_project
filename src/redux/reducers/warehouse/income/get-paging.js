import { toast } from "react-toastify";
import {get_paging_warehouse_income} from "../../../store/warehouse/income/get-paging"

const get_Paging_WareHouse_Income_Reducer = (state=get_paging_warehouse_income, action) => {
    switch (action.type) {
        case "GET_PAGING_WAREHOUSE_INCOME_0" :return{data:action.payload.data, loading: false};
        case "GET_PAGING_WAREHOUSE_INCOME_10001":return toast.error(action.payload);
        case "GET_PAGING_WAREHOUSE_INCOME_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_Paging_WareHouse_Income_Reducer