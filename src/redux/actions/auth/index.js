import axios from "axios"
import { toast } from "react-toastify"
import {headers, baseUrl} from "../../api"

export const postPhoneNumber = (state) => async (dispatch) => {
    try{
        await axios.post(`${baseUrl}/admin/login`, state, headers)
            .then(response => {
                return dispatch({ 
                    type: "POST_PHONE_0",
                    payload: response
                })
            })
            .catch(error => {
                if(error.response){
                    const code = error.response.data.code
                    switch(code){
                        case 10001 : dispatch({
                            type:"POST_PHONE_10001",
                            payload: error.response
                        }); break;
                        case 10000 : dispatch({
                            type:"POST_PHONE_10000",
                            payload:error.response
                        }); break;
                        case 11000 : dispatch({
                            type:"POST_PHONE_11000",
                            payload: error.response
                        }); break;
                        case 11002 : dispatch({
                            type:"POST_PHONE_11002",
                            payload:error.response
                        }); break;
                        case 11005 : dispatch({
                            type:"POST_PHONE_11005",
                            payload: error.response
                        }); break;
                        case 11006 : dispatch({
                            type:"POST_PHONE_11006",
                            payload:error.response
                        }); break;
                        
                        default: return error;
                    }
                }
            })
    }catch(err) {
        return toast.error("auth server error")
    }
}