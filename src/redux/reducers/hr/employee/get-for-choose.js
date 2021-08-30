import { toast } from "react-toastify";
import {get_for_choose_employee} from "../../../store/hr/employee/get-for-choose"

const get_For_Choose_Employee_Reducer = (state=get_for_choose_employee, action) => {
    switch (action.type) {
        case "GET_FOR_CHOOSE_HR_EMPLOYEE_0" :return{data:action.payload.data};
        case "GET_FOR_CHOOSE_HR_EMPLOYEE_10000":return toast.error(action.payload);
        case "GET_FOR_CHOOSE_HR_EMPLOYEE_10001":return toast.error(action.payload);
        default:return state
    }
}
export default get_For_Choose_Employee_Reducer