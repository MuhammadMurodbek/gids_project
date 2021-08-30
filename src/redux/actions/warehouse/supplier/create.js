import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const create_WareHouse_Supplier_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/warehouse/supplier/create`, state)
            .then(response => {
                return dispatch({ 
                    type: "CREATE_WAREHOUSE_SUPPLIER_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 21001 : dispatch({
                            type:"CREATE_WAREHOUSE_SUPPLIER_21001",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"CREATE_WAREHOUSE_SUPPLIER_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"CREATE_WAREHOUSE_SUPPLIER_10000",
                            payload:error.response.data.message,
                        }); break;

                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("ware-house supplier create server error")
    }
}