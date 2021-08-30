import {get_All_Data} from "../../../store/sozlamalar/organisations"
import { toast } from "react-toastify"

const get_Organisation_All_Reducer = (state = get_All_Data, action) => {
    switch(action.type) {
        case "GET_ORGANISATION_ALL_0" : return {
            data:action.payload.data,
            loading:false,
        };
        case "GET_ORGANISATION_ALL_10000" : toast.error("Unknown error to load all data"); break;
        default : return state
    }
}
export default get_Organisation_All_Reducer