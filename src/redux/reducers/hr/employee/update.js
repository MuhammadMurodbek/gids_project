import { toast } from "react-toastify";
import { Success } from "../../../api";
import {update_hr_employee} from "../../../store/hr/employee/update"

const update_Employee_Reducer = (state=update_hr_employee, action) => {
    switch (action.type) {
        case "UPDATE_HR_EMPLOYEE_0" :return Success("/hr/staff-list", "updated successfully!!!");
        case "UPDATE_HR_EMPLOYEE_13000":return toast.error(action.payload);
        case "UPDATE_HR_EMPLOYEE_14000":return toast.error(action.payload);
        case "UPDATE_HR_EMPLOYEE_15000":return toast.error(action.payload);
        case "UPDATE_HR_EMPLOYEE_16001":return toast.error(action.payload);
        case "UPDATE_HR_EMPLOYEE_16002":return toast.error(action.payload);
        case "UPDATE_HR_EMPLOYEE_10001":return toast.error(action.payload);
        case "UPDATE_HR_EMPLOYEE_10000":return toast.error(action.payload);
        default:return state
    }
}
export default update_Employee_Reducer