import { toast } from "react-toastify";
import {get_paging_hr_employee} from "../../../store/hr/employee/get-paging"

const get_Paging_HR_Employee_Reducer = (state=get_paging_hr_employee, action) => {
    switch (action.type) {
        case "GET_PAGING_EMPLOYEE_0" :return{
            data:action.payload.data, 
            loading: false
        };
        case "GET_PAGING_EMPLOYEE_10001":return toast.error(action.payload);
        case "GET_PAGING_EMPLOYEE_10000":return toast.error(action.payload);
        default:return state
    }
}
export default get_Paging_HR_Employee_Reducer