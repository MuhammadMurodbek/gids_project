import { toast } from "react-toastify";
import {choose_for_return_organization_warehouse_material} from "../../../store/warehouse/return/choose-for-return-organization"

const choose_For_Return_Organization_Warehouse_Material_Reducer = (state=choose_for_return_organization_warehouse_material, action) => {
    switch (action.type) {
        case "CHOOSE_FOR_RETURN_IF_ORGANIZATION_WAREHOUSE_MATERIAL_0" :return{data:action.payload};
        case "CHOOSE_FOR_RETURN_IF_ORGANIZATION_WAREHOUSE_MATERIAL_10001":toast.error(action.payload); break;
        case "CHOOSE_FOR_RETURN_IF_ORGANIZATION_WAREHOUSE_MATERIAL_10000":toast.error(action.payload); break;
        default:return state
    }
}
export default choose_For_Return_Organization_Warehouse_Material_Reducer