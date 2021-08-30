import { toast } from "react-toastify";
import {get_for_choose_warehouse_material} from "../../../store/warehouse/material/get-for-choose"

const get_For_Choose_WareHouse_Material_Reducer = (state=get_for_choose_warehouse_material, action) => {
    switch (action.type) {
        case "GET_FOR_CHOOSE_WAREHOUSE_MATERIAL_0" :return{data:action.payload.data};
        case "GET_FOR_CHOOSE_WAREHOUSE_MATERIAL_10001":return toast.error(action.payload);
        case "GET_FOR_CHOOSE_WAREHOUSE_MATERIAL_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_For_Choose_WareHouse_Material_Reducer