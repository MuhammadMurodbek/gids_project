import { toast } from "react-toastify";
import {get_by_id_warehouse_material_return} from "../../../store/warehouse/return/get-by-id"

const get_ById_Warehouse_Material_Return_Reducer = (state=get_by_id_warehouse_material_return, action) => {
    switch (action.type) {
        case "GET_BY_ID_WAREHOUSE_MATERIAL_RETURN_0" :return{data:action.payload.data};
        case "GET_BY_ID_WAREHOUSE_MATERIAL_RETURN_10001":return toast.error(action.payload);
        case "GET_BY_ID_WAREHOUSE_MATERIAL_RETURN_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_Warehouse_Material_Return_Reducer