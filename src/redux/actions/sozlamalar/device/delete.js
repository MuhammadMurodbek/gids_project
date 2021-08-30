import axios from "axios"
import { baseUrl, head_token } from "../../../api"

export const delete_Device_Many_Action = (id) => async (dispatch) => {

    await axios.post(`${baseUrl}/admin/settings/device/delete-many`, id, { headers: head_token })
        .then(response => {
            dispatch({
                type: "DELETE_DEVICE_MANY_0",
                payload: response
            })
        })
        .catch(error => {
            if(error.response){
                const code = error.response.data.code
                switch (code) {
                    case 10001: dispatch({
                        type: "DELETE_DEVICE_MANY_10001",
                        payload: "error 10001"
                    }); break;
                    case 10000: dispatch({
                        type: "DELETE_DEVICE_MANY_10000",
                        payload: "error 10000",
                    }); break;
                    default: return error.response
                }
            }
        })

}