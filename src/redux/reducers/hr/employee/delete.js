import {delete_hr_employee} from "../../../store/hr/employee/delete"
import {toast} from "react-toastify"
import { Success } from "../../../api";

const delete_HR_Employee_Reducer = (state=delete_hr_employee, action) => {
    switch (action.type) {
        case "DELETE_HR_EMPLOYEE_0" : return Success("/hr/staff-list", "deleted successfully!!!"); 
        case "DELETE_HR_EMPLOYEE_11000": return toast.error(action.payload);
        case "DELETE_HR_EMPLOYEE_10000": return toast.error(action.payload);
        case "DELETE_HR_EMPLOYEE_10001": return toast.error(action.payload);
        default:return state
    }
}
export default delete_HR_Employee_Reducer 