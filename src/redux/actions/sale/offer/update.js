import { toast } from "react-toastify"
import {postAxios} from "../../../api"

export const update_Sale_Offer_Action = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/sale/update`, state)
            .then(response => {
                return dispatch({ 
                    type: "UPDATE_SALE_OFFER_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 47000 : dispatch({
                            type:"UPDATE_SALE_OFFER_47000",
                            payload: error.response.data.message,
                        }); break;
                        case 10001 : dispatch({
                            type:"UPDATE_SALE_OFFER_10001",
                            payload:error.response.data.message,
                        }); break;
                        case 10000 : dispatch({
                            type:"UPDATE_SALE_OFFER_10000",
                            payload:error.response.data.message,
                        }); break;
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("sale offer update server error")
    }
}