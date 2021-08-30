import { toast } from "react-toastify"
import {transfer_autocomplete_reducer} from "../../../store/products/transfer/transfer-autocomplete"

const transfer_Autocomplete_Reducer = (state=transfer_autocomplete_reducer, action) => {
    switch(action.type){
        case "TRANSFER_AUTOCOMPLETE_PRODUCTS_0" : return {data: action.payload.data};
        case "TRANSFER_AUTOCOMPLETE_PRODUCTS_10001" : return toast.error(action.payload)
        case "TRANSFER_AUTOCOMPLETE_PRODUCTS_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default transfer_Autocomplete_Reducer