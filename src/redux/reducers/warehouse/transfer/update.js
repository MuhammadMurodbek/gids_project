import { toast } from "react-toastify";
import {update_warehouse_material_transfer} from "../../../store/warehouse/transfer/update"
import { Success } from "../../../api";

const update_Warehouse_Material_Transfer_Reducer = (state=update_warehouse_material_transfer, action) => {
    switch (action.type) {
        case "UPDATE_WAREHOUSE_TRANSFER_0" :return Success("/ware-house/copy-offer", "updated successfully!!!");
        case "UPDATE_WAREHOUSE_TRANSFER_29000":toast.error(action.payload); break;
        case "UPDATE_WAREHOUSE_TRANSFER_10001":toast.error(action.payload); break;
        case "UPDATE_WAREHOUSE_TRANSFER_10000":toast.error(action.payload); break;
        default:return state
    }
}
export default update_Warehouse_Material_Transfer_Reducer