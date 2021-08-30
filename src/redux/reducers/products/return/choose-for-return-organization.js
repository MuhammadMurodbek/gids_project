import { toast } from "react-toastify";
import {choose_for_return_if_organization} from "../../../store/products/return/choose-for-return-organization"

const choose_for_return_if_organization_Reducer = (state=choose_for_return_if_organization, action) => {
    switch (action.type) {
        case "CHOOSE_FOR_RETURN_IF_ORGANIZATION_PRODUCTS_0" :return{data:action.payload};
        case "CHOOSE_FOR_RETURN_IF_ORGANIZATION_PRODUCTS_10001":toast.error(action.payload); break;
        case "CHOOSE_FOR_RETURN_IF_ORGANIZATION_PRODUCTS_10000":toast.error(action.payload); break;
        default:return state
    }
}
export default choose_for_return_if_organization_Reducer