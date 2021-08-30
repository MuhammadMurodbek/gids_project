import {baseUrl, headers} from '../../api';
import axios from "axios"
import { toast } from "react-toastify";

export const postRegistration = (state) => async (dispatch) => {
    try{
        await axios.post(`${baseUrl}/admin/register`, state, headers).then((response) => {
            dispatch({
                type:"POST_REGISTER_0",
                payload:{response, state}
            })
            toast.success(response.data.message)
            console.log(response)
        }).catch((error) => {
            if(error.response.data.code === 11001){
                dispatch({
                    type: "POST_REGISTER_11001",
                    payload: error.response
                })
                toast.warning(error.response.data.message)
            }
            else if(error.response.data.code === 11002){
                dispatch({
                    type: "POST_REGISTER_11002",
                    payload: error.response
                })
                toast.error(error.response.data.message)
            }
            else if (error.response.data.code === 10001){
                dispatch({
                    type: "POST_REGISTER_10001",
                    payload: error.response
                })
                toast.error(error.response.data.message)
            }else if (error.response.data.code === 10000){
                dispatch({
                    type: "POST_REGISTER_10000",
                    payload: error.response
                })
                toast.error(error.response.data.message)
            }
        })
    }
    catch (error) {
        console.log(error)
    }

}