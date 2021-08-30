import { toast } from "react-toastify"
import {get_Org_Data_Id} from "../../../store/sozlamalar/organisations/getById"

const get_Org_Data_Id_Reducer = (state=get_Org_Data_Id, action) => {
    switch (action.type) {
        case "GET_ORG_ID_0" : return {data:action.payload}
        case "GET_ORG_ID_401": toast.error("Invalid error"); break;
        case "GET_ORG_ID_13002": toast.error("Validation error"); break;
        case "GET_ORG_ID_10001":toast.error("Category not found"); break;
        case "GET_ORG_ID_10000":toast.error("Category not found"); break;
        default:return state
    }
}
export default get_Org_Data_Id_Reducer