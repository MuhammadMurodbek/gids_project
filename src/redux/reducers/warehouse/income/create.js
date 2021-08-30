import { toast } from "react-toastify"
import {create_warehouse_income} from "../../../store/warehouse/income/create"
import { Success } from "../../../api";

const create_WareHouse_Income_Reducer = (state=create_warehouse_income, action) => {
    switch(action.type){
        case "CREATE_WAREHOUSE_INCOME_0" : return Success('/ware-house/income', 'created successfully!!!');
        case "CREATE_WAREHOUSE_INCOME_35000" : return toast.error(action.payload)
        case "CREATE_WAREHOUSE_INCOME_10001" : return toast.error(action.payload)
        case "CREATE_WAREHOUSE_INCOME_10000" : return toast.error(action.payload)
        default : return state
    }   
}
export default create_WareHouse_Income_Reducer