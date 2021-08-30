import { toast } from "react-toastify"
import {create_warehouse_supplier} from "../../../store/warehouse/supplier/create"
import { Success } from "../../../api";

const create_WareHouse_Supplier_Reducer = (state=create_warehouse_supplier, action) => {
    switch(action.type){
        case "CREATE_WAREHOUSE_SUPPLIER_0" : Success("/ware-house/supplier", "created successfully!!!");break;
        case "CREATE_WAREHOUSE_SUPPLIER_21001" : return toast.error(action.payload)
        case "CREATE_WAREHOUSE_SUPPLIER_10001" : return toast.error(action.payload)
        case "CREATE_WAREHOUSE_SUPPLIER_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default create_WareHouse_Supplier_Reducer