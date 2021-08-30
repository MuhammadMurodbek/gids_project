import { toast } from "react-toastify"
import {transfer_autocomplete_warehouse_material} from "../../../store/warehouse/transfer/transfer-autocomplete"

const transfer_Autocomplete_Warehouse_Material_Reducer = (state=transfer_autocomplete_warehouse_material, action) => {
    switch(action.type){
        case "TRANSFER_AUTOCOMPLETE_WAREHOUSE_MATERIAL_0" : return {data: action.payload.data};
        case "TRANSFER_AUTOCOMPLETE_WAREHOUSE_MATERIAL_10001" : return toast.error(action.payload)
        case "TRANSFER_AUTOCOMPLETE_WAREHOUSE_MATERIAL_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default transfer_Autocomplete_Warehouse_Material_Reducer