import {delete_many_warehouse_material} from "../../../store/warehouse/material/delete-many"
import {toast} from "react-toastify"
import { Success } from "../../../api";

const delete_Many_WareHouse_Material_Reducer = (state=delete_many_warehouse_material, action) => {
    switch (action.type) {
        case "DELETE_MANY_WAREHOUSE_MATERIAL_0" : return Success("/ware-house/tmb", "deleted successfully!!!"); 
        case "DELETE_MANY_WAREHOUSE_MATERIAL_10000": return toast.error(action.payload);
        case "DELETE_MANY_WAREHOUSE_MATERIAL_10001": return toast.error(action.payload);
        default:return state
    }
}
export default delete_Many_WareHouse_Material_Reducer 