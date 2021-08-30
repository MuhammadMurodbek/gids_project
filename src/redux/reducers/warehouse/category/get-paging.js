import { toast } from "react-toastify";
import {get_paging_warehouse_category} from "../../../store/warehouse/category/get-paging"

const get_Paging_WareHouse_Category_Reducer = (state=get_paging_warehouse_category, action) => {
    switch (action.type) {
        case "GET_PAGING_WAREHOUSE_CATEGORY_0" :return{data:action.payload, loading: false};
        case "GET_PAGING_WAREHOUSE_CATEGORY_10001":return toast.error(action.payload);
        case "GET_PAGING_WAREHOUSE_CATEGORY_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_Paging_WareHouse_Category_Reducer