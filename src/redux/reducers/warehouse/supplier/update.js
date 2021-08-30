import { toast } from "react-toastify";
import {update_warehouse_supplier} from "../../../store/warehouse/supplier/update"
import { Success } from "../../../api";

const update_WareHouse_Supplier_Reducer = (state=update_warehouse_supplier, action) => {
    switch (action.type) {
        case "UPDATE_WAREHOUSE_SUPPLIER_0" :return Success("/ware-house/supplier", "updated successfully!!!");
        case "UPDATE_WAREHOUSE_SUPPLIER_21001":toast.error(action.payload); break;
        case "UPDATE_WAREHOUSE_SUPPLIER_21000":toast.error(action.payload); break;
        case "UPDATE_WAREHOUSE_SUPPLIER_10001":toast.error(action.payload); break;
        case "UPDATE_WAREHOUSE_SUPPLIER_10000":toast.error(action.payload); break;
        default:return state
    }
}
export default update_WareHouse_Supplier_Reducer