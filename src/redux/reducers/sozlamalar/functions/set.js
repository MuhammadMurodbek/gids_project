import {features_set} from "../../../store/sozlamalar/functions/set"
import {toast} from "react-toastify"

const set_Features_Reducer = (state=features_set, action) => {
    switch (action.type) {
        case "SET_FEATURES_0" : return{data:action.payload}; 
        case "SET_FEATURES_10000": return toast.error("10000 error");
        case "SET_FEATURES_10001": return {data:action.payload};
        default:return state
    }
}
export default set_Features_Reducer