import { toast } from "react-toastify";
import {get_by_id_warehouse_category} from "../../../store/warehouse/category/get-by-id"

const get_ById_WareHouse_Category_Reducer = (state=get_by_id_warehouse_category, action) => {
    switch (action.type) {
        case "GET_BY_ID_WAREHOUSE_CATEGORY_0" :return{data:action.payload.data};
        case "GET_BY_ID_WAREHOUSE_CATEGORY_10001":return toast.error(action.payload);
        case "GET_BY_ID_WAREHOUSE_CATEGORY_10000":return toast.error(action.payload);
        case "GET_BY_ID_WAREHOUSE_CATEGORY_23000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_WareHouse_Category_Reducer