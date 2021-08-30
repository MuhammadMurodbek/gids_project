import { toast } from "react-toastify"
import {choose_for_transfer_reducer} from "../../../store/products/transfer/choose-for-transfer"

const choose_For_Transfer_Reducer = (state=choose_for_transfer_reducer, action) => {
    switch(action.type){
        case "CHOOSE_FOR_AUTOCOMPLETE_0" : return {data: action.payload.data};
        case "CHOOSE_FOR_AUTOCOMPLETE_10001" : return toast.error(action.payload)
        case "CHOOSE_FOR_AUTOCOMPLETE_10000" : return toast.error(action.payload)
        default : return state
    }
}
export default choose_For_Transfer_Reducer