import { toast } from "react-toastify"
import {create_warehouse_category} from "../../../store/warehouse/category/create"
import { Success } from "../../../api";

const create_WareHouse_Category_Reducer = (state=create_warehouse_category, action) => {
    switch(action.type){
        case "CREATE_WAREHOUSE_CATEGORY_0" : return {data: action.payload};
        case "CREATE_WAREHOUSE_CATEGORY_23001" : return toast.error(action.payload)
        case "CREATE_WAREHOUSE_CATEGORY_10001" : return toast.error(action.payload)
        case "CREATE_WAREHOUSE_CATEGORY_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_WareHouse_Category_Reducer