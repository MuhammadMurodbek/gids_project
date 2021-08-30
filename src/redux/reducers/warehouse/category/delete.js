import {delete_warehouse_category} from "../../../store/warehouse/category/delete"
import {toast} from "react-toastify"
import { Success } from "../../../api";

const delete_WareHouse_Category_Reducer = (state=delete_warehouse_category, action) => {
    switch (action.type) {
        case "DELETE_WAREHOUSE_CATEGORY_0" : return Success("/ware-house/active-category", "deleted successfully!!!"); 
        case "DELETE_WAREHOUSE_CATEGORY_23000": return toast.error(action.payload);
        case "DELETE_WAREHOUSE_CATEGORY_10000": return toast.error(action.payload);
        case "DELETE_WAREHOUSE_CATEGORY_10001": return toast.error(action.payload);
        default:return state
    }
}
export default delete_WareHouse_Category_Reducer 