import { toast } from "react-toastify";
import {delete_Org_Id} from "../../../store/sozlamalar/organisations/delete"

const Success = () => {
    toast.success("Successfully deleted !!!");
    window.location.href = "/settings/organization"
}
const delete_Org_Id_Reducer = (state=delete_Org_Id, action) => {
    switch (action.type) {
        case "DELETE_ORG_0":Success(); break;
        case "DELETE_ORG_401": toast.error(action.payload); break;
        case "DELETE_ORG_13002": toast.error(action.payload); break;
        case "DELETE_ORG_10001": toast.error(action.payload); break;
        case "DELETE_ORG_10000": toast.error(action.payload); break;
        default: return state
    }
}
export default delete_Org_Id_Reducer;