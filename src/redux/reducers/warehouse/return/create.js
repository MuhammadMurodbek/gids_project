import { toast } from "react-toastify"
import { Success } from "../../../api";
import {create_warehouse_material_return} from "../../../store/warehouse/return/create"

const create_Warehouse_Material_Return_Reducer = (state=create_warehouse_material_return, action) => {
    switch(action.type){
        case "CREATE_WAREHOUSE_MATERIAL_RETURN_0" : return Success("/ware-house/remove", "created successfully!!!");
        case "CREATE_WAREHOUSE_MATERIAL_RETURN_41000": return toast.error(action.payload)
        case "CREATE_WAREHOUSE_MATERIAL_RETURN_10001" : return toast.error(action.payload)
        case "CREATE_WAREHOUSE_MATERIAL_RETURN_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_Warehouse_Material_Return_Reducer