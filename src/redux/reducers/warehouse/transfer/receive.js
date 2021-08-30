import { toast } from "react-toastify";
import {receive_warehouse_material_transfer} from "../../../store/warehouse/transfer/receive"

const receive_warehouse_material_transfer_Reducer = (state=receive_warehouse_material_transfer, action) => {
    switch (action.type) {
        case "RECEIVE_WAREHOUSE_TRANSFER_0" :return{data:action.payload};
        case "RECEIVE_WAREHOUSE_TRANSFER_37006": return toast.error(action.payload);
        case "RECEIVE_WAREHOUSE_TRANSFER_37003": return toast.error(action.payload);
        case "RECEIVE_WAREHOUSE_TRANSFER_10001":return toast.error(action.payload);
        case "RECEIVE_WAREHOUSE_TRANSFER_10000":return toast.error(action.payload);
        default:return state
    }
}
export default receive_warehouse_material_transfer_Reducer