import { toast } from "react-toastify"
import { postAxios } from "../../../api"

export const get_Organisation_All_Data = (state) => async (dispatch) => {
    try{
        await postAxios(`/admin/settings/organization/get-all`, state)
            .then(response => {
                dispatch({
                    type:"GET_ORGANISATION_ALL_0",
                    payload: response
                })
            })
            .catch(error => {
                console.log(error.response.data.code)
                if(error.response.data.code === 10000){
                    dispatch({
                        type:"GET_ORGANISATION_ALL_10000",
                        payload:"error",
                    })
                }else{
                    toast.error("Failed to load data o'sha ")
                }
            })
    }catch(error){
        return toast.error("Failed to load data")
    }
}