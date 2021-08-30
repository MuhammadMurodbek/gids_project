import { toast } from "react-toastify"
import { postAxios} from "../../../api"

export const delete_WareHouse_Supplier_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/warehouse/supplier/delete`, state)
            .then(response => {
                return dispatch({ 
                    type: "DELETE_WAREHOUSE_SUPPLIER_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 21000 : dispatch({
                            type:"DELETE_WAREHOUSE_SUPPLIER_21000",
                            payload: error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"DELETE_WAREHOUSE_SUPPLIER_10000",
                            payload:error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"DELETE_WAREHOUSE_SUPPLIER_10001",
                            payload: error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("ware-house supplier delete server error")
    }
}