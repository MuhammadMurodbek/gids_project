import {loyal_set} from "../../../store/sozlamalar/loyalty/set"
import {toast} from "react-toastify"

const set_Loyal_Reducer = (state=loyal_set, action) => {
    switch (action.type) {
        case "SET_LOYAL_0" : return toast.success("updated successfully !!"); 
        case "SET_LOYAL_10000": return toast.error("set loyal error 10000");
        case "SET_LOYAL_10001": return toast.error("10001 error");
        default:return state
    }
}
export default set_Loyal_Reducer