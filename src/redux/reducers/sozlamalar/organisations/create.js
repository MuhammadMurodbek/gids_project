import { toast } from "react-toastify"
import {post_Org_Create} from "../../../store/sozlamalar/organisations/create"

const Success = () => {
    toast.success("Successfully created !!!",{position: toast.POSITION.BOTTOM_RIGHT,})
    window.location.href="/settings"
}
const post_Org_Create_Reducer = (state=post_Org_Create, action) => {
    switch(action.type){
        case "POST_ORG_CREATE_0": Success(action.payload); break;
        case "POST_ORG_CREATE_401": toast.error("Authentication failed",{position: toast.POSITION.BOTTOM_RIGHT,}); break;
        case "POST_ORG_CREATE_13001": toast.error("Organization with this name/phone_number already exists",{position: toast.POSITION.BOTTOM_RIGHT,}); break;
        case "POST_ORG_CREATE_10001": toast.error("Data schema validation error",{position: toast.POSITION.BOTTOM_RIGHT,}); break;
        case "POST_ORG_CREATE_10000": toast.error("Invalid error",{position: toast.POSITION.BOTTOM_RIGHT,}); break;
        default: return state
    }
}
export default post_Org_Create_Reducer