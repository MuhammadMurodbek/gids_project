import { toast } from "react-toastify";
import {get_paging_warehouse_material} from "../../../store/warehouse/material/get-paging"

const get_Paging_WareHouse_Material_Reducer = (state=get_paging_warehouse_material, action) => {
    switch (action.type) {
        case "GET_PAGING_WAREHOUSE_MATERIAL_0" :return{data:action.payload.data, loading: false};
        case "GET_PAGING_WAREHOUSE_MATERIAL_10001":return toast.error(action.payload);
        case "GET_PAGING_WAREHOUSE_MATERIAL_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_Paging_WareHouse_Material_Reducer