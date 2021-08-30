import { toast } from "react-toastify"
import { Success } from "../../../api";
import {create_hr_employee} from "../../../store/hr/employee/create"

const create_HR_Employee_Reducer = (state=create_hr_employee, action) => {
    switch(action.type){
        case "CREATE_HR_EMPLOYEE_0" : return Success("/hr/staff-list", "created successfully!!!");
        case "CREATE_HR_EMPLOYEE_13000" : return toast.error(action.payload);
        case "CREATE_HR_EMPLOYEE_14000" : return toast.error(action.payload);
        case "CREATE_HR_EMPLOYEE_16002" : return toast.error(action.payload);
        case "CREATE_HR_EMPLOYEE_16001" : return toast.error(action.payload);
        case "CREATE_HR_EMPLOYEE_15000" : return toast.error(action.payload);
        case "CREATE_HR_EMPLOYEE_10001" : return toast.error("10001 error create employee");
        case "CREATE_HR_EMPLOYEE_10000" : return toast.error(action.payload);
        default : return state;
    }
}
export default create_HR_Employee_Reducer