import { toast } from "react-toastify";
import {update_warehouse_category} from "../../../store/warehouse/category/update"
import { Success } from "../../../api";

const update_WareHouse_category_Reducer = (state=update_warehouse_category, action) => {
    switch (action.type) {
        case "UPDATE_WAREHOUSE_CATEGORY_0" :return Success("/ware-house/active-category", "updated successfully!!!");
        case "UPDATE_WAREHOUSE_CATEGORY_23001":toast.error(action.payload); break;
        case "UPDATE_WAREHOUSE_CATEGORY_23000":toast.error(action.payload); break;
        case "UPDATE_WAREHOUSE_CATEGORY_10001":toast.error(action.payload); break;
        case "UPDATE_WAREHOUSE_CATEGORY_10000":toast.error(action.payload); break;
        default:return state
    }
}
export default update_WareHouse_category_Reducer