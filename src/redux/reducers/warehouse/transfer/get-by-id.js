import { toast } from "react-toastify";
import {get_by_id_transfer_warehouse_material} from "../../../store/warehouse/transfer/get-by-id"

const get_ById_Warehouse_Material_Transfer_Reducer = (state=get_by_id_transfer_warehouse_material, action) => {
    switch (action.type) {
        case "GET_BY_ID_WAREHOUSE_TRANSFER_0" :return{data:action.payload.data};
        case "GET_BY_ID_WAREHOUSE_TRANSFER_10001":return toast.error(action.payload);
        case "GET_BY_ID_WAREHOUSE_TRANSFER_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_Warehouse_Material_Transfer_Reducer