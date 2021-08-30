import { toast } from "react-toastify"
import {create_warehouse_material} from "../../../store/warehouse/material/create"
import { Success } from "../../../api";

const create_WareHouse_Material_Reducer = (state=create_warehouse_material, action) => {
    switch(action.type){
        case "CREATE_WAREHOUSE_MATERIAL_0" : return Success('/ware-house/tmb', "created successfully!!!");
        case "CREATE_WAREHOUSE_MATERIAL_19000" : return toast.error(action.payload)
        case "CREATE_WAREHOUSE_MATERIAL_13000" : return toast.error(action.payload)
        case "CREATE_WAREHOUSE_MATERIAL_23001" : return toast.error(action.payload)
        case "CREATE_WAREHOUSE_MATERIAL_21000" : return toast.error(action.payload)
        case "CREATE_WAREHOUSE_MATERIAL_10001" : return toast.error(action.payload)
        case "CREATE_WAREHOUSE_MATERIAL_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_WareHouse_Material_Reducer