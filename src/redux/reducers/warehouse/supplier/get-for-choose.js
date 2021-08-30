import { toast } from "react-toastify";
import {get_for_choose_warehouse_supplier} from "../../../store/warehouse/supplier/get-for-choose"

const get_For_Choose_WareHouse_Supplier_Reducer = (state=get_for_choose_warehouse_supplier, action) => {
    switch (action.type) {
        case "GET_FOR_CHOOSE_WAREHOUSE_SUPPLIER_0" :return{data:action.payload};
        case "GET_FOR_CHOOSE_WAREHOUSE_SUPPLIER_10001":return toast.error(action.payload);
        case "GET_FOR_CHOOSE_WAREHOUSE_SUPPLIER_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_For_Choose_WareHouse_Supplier_Reducer