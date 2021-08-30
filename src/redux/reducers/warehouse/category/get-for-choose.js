import { toast } from "react-toastify";
import {get_for_choose_warehouse_category} from "../../../store/warehouse/category/get-for-choose"

const get_For_Choose_WareHouse_Category_Reducer = (state=get_for_choose_warehouse_category, action) => {
    switch (action.type) {
        case "GET_FOR_CHOOSE_WAREHOUSE_CATEGORY_0" :return{data:action.payload};
        case "GET_FOR_CHOOSE_WAREHOUSE_CATEGORY_10001":return toast.error(action.payload);
        case "GET_FOR_CHOOSE_WAREHOUSE_CATEGORY_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_For_Choose_WareHouse_Category_Reducer