import { toast } from "react-toastify"
import {create_warehouse_active} from "../../../store/warehouse/active/create"
import { Success } from "../../../api";


const create_WareHouse_Active_Reducer = (state=create_warehouse_active, action) => {
    switch(action.type){
        case "CREATE_WAREHOUSE_ACTIVE_0" : return Success("/ware-house/active", "created successfully!!!");
        case "CREATE_WAREHOUSE_ACTIVE_22001" : return toast.error(action.payload)
        case "CREATE_WAREHOUSE_ACTIVE_10001" : return toast.error(action.payload)
        case "CREATE_WAREHOUSE_ACTIVE_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_WareHouse_Active_Reducer