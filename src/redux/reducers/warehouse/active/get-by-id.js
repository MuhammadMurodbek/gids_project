import { toast } from "react-toastify";
import { get_by_id_warehouse_active } from "../../../store/warehouse/active/get-by-id"

const get_ById_WareHouse_Active_Reducer = (state = get_by_id_warehouse_active, action) => {
    switch (action.type) {
        case "GET_BY_ID_WAREHOUSE_ACTIVE_0": return { data: action.payload.data };
        case "GET_BY_ID_WAREHOUSE_ACTIVE_10001": return toast.error(action.payload);
        case "GET_BY_ID_WAREHOUSE_ACTIVE_10000": return toast.error(action.payload);
        case "GET_BY_ID_WAREHOUSE_ACTIVE_22000": return toast.error(action.payload);
        default: return state
    }
}
export default get_ById_WareHouse_Active_Reducer