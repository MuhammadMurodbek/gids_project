import { toast } from "react-toastify";
import {get_by_id_warehouse_material} from "../../../store/warehouse/material/get-by-id"

const get_ById_WareHouse_Material_Reducer = (state=get_by_id_warehouse_material, action) => {
    switch (action.type) {
        case "GET_BY_ID_WAREHOUSE_MATERIAL_0" :return{data:action.payload.data};
        case "GET_BY_ID_WAREHOUSE_MATERIAL_10001":return toast.error(action.payload);
        case "GET_BY_ID_WAREHOUSE_MATERIAL_10000":return toast.error(action.payload);
        case "GET_BY_ID_WAREHOUSE_MATERIAL_24000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_WareHouse_Material_Reducer