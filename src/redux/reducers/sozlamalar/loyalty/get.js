import { toast } from "react-toastify";
import {loyal_get} from "../../../store/sozlamalar/loyalty/get"

const get_Loyal_Reducer = (state=loyal_get, action) => {
    switch (action.type) {
        case "GET_LOYAL_0" :return{data:action.payload};
        case "GET_LOYAL_10000":return toast.error("10000 error loyalty get");
        default:return state
    }
}
export default get_Loyal_Reducer