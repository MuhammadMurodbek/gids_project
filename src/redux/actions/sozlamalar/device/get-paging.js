import axios from "axios"
import {baseUrl, head_token} from "../../../api"

export const get_Device_Paging_Action = (state) => async (dispatch) => {
   
    await axios.post(`${baseUrl}/admin/settings/device/get-paging`, state, {headers:head_token})
        .then(response => {
            dispatch({
                type:"GET_DEVICE_PAGING_0",
                payload:response.data,
            })
        })
        .catch(error => {
            if(error.response){
                if(error.response.data.code === 10000){
                    dispatch({
                        type:"GET_DEVICE_PAGING_10000",
                        payload:"Unknown error 10000",
                    });
                }else if(error.response.data.code === 10001){
                    dispatch({
                        type:"GET_DEVICE_PAGING_10001",
                        payload:"validation error 10001"
                    });
                }else if(error.response.data.code === 17001){
                    dispatch({
                        type:"GET_DEVICE_PAGING_17001",
                        payload:"Invalid error 17001"
                    });
                }
            }
        })
}