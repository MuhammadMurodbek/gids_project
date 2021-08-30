import { toast } from "react-toastify"
import {choose_for_transfer_warehouse_material} from "../../../store/warehouse/transfer/choose-for-transfer"

const choose_For_Transfer_Warehouse_Material_Reducer = (state=choose_for_transfer_warehouse_material, action) => {
    switch(action.type){
        case "CHOOSE_FOR_AUTOCOMPLETE_MATERIAL_TRANSFER_0" : return {data: action.payload.data};
        case "CHOOSE_FOR_AUTOCOMPLETE_MATERIAL_TRANSFER_10001" : return toast.error(action.payload)
        case "CHOOSE_FOR_AUTOCOMPLETE_MATERIAL_TRANSFER_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default choose_For_Transfer_Warehouse_Material_Reducer