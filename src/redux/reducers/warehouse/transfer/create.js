import { toast } from "react-toastify"
import { Success } from "../../../api";
import {create_warehouse_material_transfer} from "../../../store/warehouse/transfer/create"

const create_Warehouse_Material_Transfer_Reducer = (state=create_warehouse_material_transfer, action) => {
    switch(action.type){
        case "CREATE_WAREHOUSE_TRANSFER_0" : return Success("/ware-house/copy-offer", "created successfully!!!");
        case "CREATE_WAREHOUSE_TRANSFER_29000": return toast.error(action.payload)
        case "CREATE_WAREHOUSE_TRANSFER_10001" : return toast.error(action.payload)
        case "CREATE_WAREHOUSE_TRANSFER_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_Warehouse_Material_Transfer_Reducer