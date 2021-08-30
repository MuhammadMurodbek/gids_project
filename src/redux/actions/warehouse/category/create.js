import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const create_WareHouse_Category_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/warehouse/category/create`, state)
            .then(response => {
                return dispatch({ 
                    type: "CREATE_WAREHOUSE_CATEGORY_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 23001 : dispatch({
                            type:"CREATE_WAREHOUSE_CATEGORY_23001",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"CREATE_WAREHOUSE_CATEGORY_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"CREATE_WAREHOUSE_CATEGORY_10000",
                            payload:error.response.data.message,
                        }); break;

                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("ware-house category create server error")
    }
}