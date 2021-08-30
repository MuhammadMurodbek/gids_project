import { toast } from "react-toastify"
import { Success } from "../../../api";
import {cancel_warehouse_material_transfer} from "../../../store/warehouse/transfer/cancel"

const cancel_Warehouse_Material_Transfer_Reducer = (state=cancel_warehouse_material_transfer, action) => {
    switch(action.type){
        case "CANCEL_WAREHOUSE_MATERIAL_TRANSFER_0" : return Success("/products/copy-offers", "canceled successfully!!!");
        case "CANCEL_WAREHOUSE_MATERIAL_TRANSFER_10001" : return toast.error(action.payload)
        case "CANCEL_WAREHOUSE_MATERIAL_TRANSFER_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default cancel_Warehouse_Material_Transfer_Reducer