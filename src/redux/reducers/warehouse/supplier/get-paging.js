import { toast } from "react-toastify";
import {get_paging_warehouse_supplier} from "../../../store/warehouse/supplier/get-paging"

const get_Paging_WareHouse_Supplier_Reducer = (state=get_paging_warehouse_supplier, action) => {
    switch (action.type) {
        case "GET_PAGING_WAREHOUSE_SUPPLIER_0" :return{data:action.payload, loading: false};
        case "GET_PAGING_WAREHOUSE_SUPPLIER_10001":return toast.error(action.payload);
        case "GET_PAGING_WAREHOUSE_SUPPLIER_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_Paging_WareHouse_Supplier_Reducer