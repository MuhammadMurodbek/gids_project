import {delete_warehouse_supplier} from "../../../store/warehouse/supplier/delete"
import {toast} from "react-toastify"
import { Success } from "../../../api";

const delete_WareHouse_Supplier_Reducer = (state=delete_warehouse_supplier, action) => {
    switch (action.type) {
        case "DELETE_WAREHOUSE_SUPPLIER_0" : return Success("/ware-house/supplier", "deleted successfully!!!"); 
        case "DELETE_WAREHOUSE_SUPPLIER_21000": return toast.error(action.payload);
        case "DELETE_WAREHOUSE_SUPPLIER_10000": return toast.error(action.payload);
        case "DELETE_WAREHOUSE_SUPPLIER_10001": return toast.error(action.payload);
        default:return state
    }
}
export default delete_WareHouse_Supplier_Reducer 