import { toast } from "react-toastify";
import {update_warehouse_material} from "../../../store/warehouse/material/update"
import { Success } from "../../../api";

const update_WareHouse_Material_Reducer = (state=update_warehouse_material, action) => {
    switch (action.type) {
        case "UPDATE_WAREHOUSE_MATERIAL_0" :return Success("/ware-house/tmb", "updated successfully!!!");
        case "UPDATE_WAREHOUSE_MATERIAL_19000":toast.error(action.payload); break;
        case "UPDATE_WAREHOUSE_MATERIAL_13000":toast.error(action.payload); break;
        case "UPDATE_WAREHOUSE_MATERIAL_21000":toast.error(action.payload); break;
        case "UPDATE_WAREHOUSE_MATERIAL_23000":toast.error(action.payload); break;
        case "UPDATE_WAREHOUSE_MATERIAL_24000":toast.error(action.payload); break;
        case "UPDATE_WAREHOUSE_MATERIAL_10001":toast.error(action.payload); break;
        case "UPDATE_WAREHOUSE_MATERIAL_10000":toast.error(action.payload); break;
        default:return state
    }
}
export default update_WareHouse_Material_Reducer