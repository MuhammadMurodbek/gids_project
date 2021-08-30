import { toast } from "react-toastify";
import {get_paging_warehouse_material_transfer} from "../../../store/warehouse/transfer/get-paging"

const get_Paging_Warehouse_Material_Transfer_Reducer = (state=get_paging_warehouse_material_transfer, action) => {
    switch (action.type) {
        case "GET_PAGING_WAREHOUSE_MATERIAL_TRANSFER_0" :return{data:action.payload, loading: false};
        case "GET_PAGING_WAREHOUSE_MATERIAL_TRANSFER_10001":return toast.error(action.payload);
        case "GET_PAGING_WAREHOUSE_MATERIAL_TRANSFER_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_Paging_Warehouse_Material_Transfer_Reducer