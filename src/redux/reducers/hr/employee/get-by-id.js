import { toast } from "react-toastify";
import {get_by_id_hr_employee} from "../../../store/hr/employee/get-by-id"

const get_ById_HR_Employee_Reducer = (state=get_by_id_hr_employee, action) => {
    switch (action.type) {
        case "GET_BY_ID_HR_EMPLOYEE_0" :return{data:action.payload};
        case "GET_BY_ID_HR_EMPLOYEE_15000":return toast.error(action.payload);
        case "GET_BY_ID_HR_EMPLOYEE_10000":return toast.error(action.payload);
        case "GET_BY_ID_HR_EMPLOYEE_10001":return toast.error(action.payload);
        default:return state
    }
}
export default get_ById_HR_Employee_Reducer