import { toast } from "react-toastify"
import {update_Org_Data_Id} from "../../../store/sozlamalar/organisations/update"
import {Success} from "../../../api"

const update_Org_Data_Id_Reducer = (state=update_Org_Data_Id, action) => {
    switch (action.type) {
        case "UPDATE_ORG_ID_0" : return Success('/settings', "updated successfully")
        case "UPDATE_ORG_ID_401": return toast.error("Invalid error")
        case "UPDATE_ORG_ID_13001":return toast.error("Validation error")
        case "UPDATE_ORG_ID_13002":return toast.error("Validation error")
        case "UPDATE_ORG_ID_10001":return toast.error("Category not found")
        case "UPDATE_ORG_ID_10000":return toast.error("Category not found")
        default:return state
    }
}
export default update_Org_Data_Id_Reducer