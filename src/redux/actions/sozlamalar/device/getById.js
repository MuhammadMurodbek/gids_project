import axios from "axios"
import { baseUrl, head_token } from "../../../api"

export const get_Device_By_Id_Action = (id) => async (dispatch) => {

    await axios.post(`${baseUrl}/admin/settings/device/get-by-id`, id, { headers: head_token })
        .then(response => {
            dispatch({
                type: "GET_DEVICE_BY_ID_0",
                payload: response.data
            })
        })
        .catch(error => {
            if(error.response){
                const code = error.response.data.code
                switch (code) {
                    case 17000: dispatch({
                        type: "GET_DEVICE_BY_ID_17000",
                        payload: error.response.data.message,
                    }); break;
                    case 10001: dispatch({
                        type: "GET_DEVICE_BY_ID_10001",
                        payload: error.response.data.message,
                    }); break;
                    case 10000: dispatch({
                        type: "GET_DEVICE_BY_ID_10000",
                        payload: error.response.data.message,
                    }); break;
                    default: return error.response
                }
            }
        })

}