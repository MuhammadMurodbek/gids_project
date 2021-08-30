import { toast } from "react-toastify";
import {get_by_id_warehouse_supplier} from "../../../store/warehouse/supplier/get-by-id"

const get_ById_WareHouse_Supplier_Reducer = (state=get_by_id_warehouse_supplier, action) => {
    switch (action.type) {
        case "GET_BY_ID_WAREHOUSE_SUPPLIER_0" :return{data:action.payload.data};
        case "GET_BY_ID_WAREHOUSE_SUPPLIER_10001":return toast.error(action.payload);
        case "GET_BY_ID_WAREHOUSE_SUPPLIER_10000":return toast.error(action.payload);
        case "GET_BY_ID_WAREHOUSE_SUPPLIER_21000":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_WareHouse_Supplier_Reducer