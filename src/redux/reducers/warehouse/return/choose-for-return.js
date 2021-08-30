import { toast } from "react-toastify";
import {choose_for_return_warehouse_material} from "../../../store/warehouse/return/choose-for-return"

const choose_For_Return_Warehouse_Material_Reducer = (state=choose_for_return_warehouse_material, action) => {
    switch (action.type) {
        case "CHOOSE_FOR_RETURN_WAREHOUSE_MATERIAL_0" :return{data:action.payload};
        case "CHOOSE_FOR_RETURN_WAREHOUSE_MATERIAL_10001":return toast.error(action.payload);
        case "CHOOSE_FOR_RETURN_WAREHOUSE_MATERIAL_10000":return toast.error(action.payload);
        default:return state
    }
}
export default choose_For_Return_Warehouse_Material_Reducer