import axios from "axios"
// import { toast } from "react-toastify"
import { baseUrl, head_token } from "../../../api"

export const update_Device_By_Id_Action = (state) => async (dispatch) => {

    await axios.post(`${baseUrl}/admin/settings/device/update`, state, { headers: head_token })
        .then(response => {
            dispatch({
                type: "UPDATE_DEVICE_BY_ID_0",
                payload: response
            })
            // toast.success("Updated successfully !!!")
            // window.location.href="/settings/pos"
        })
        .catch(error => {
            if(error.response){
                const code = error.response.data.code
                switch (code) {
                    case 17001: dispatch({
                        type: "UPDATE_DEVICE_BY_ID_17001",
                        payload: error.response.data.message,
                    }); break;
                    case 17000: dispatch({
                        type: "UPDATE_DEVICE_BY_ID_17000",
                        payload: error.response.data.message,
                    }); break;
                    case 10001: dispatch({
                        type: "UPDATE_DEVICE_BY_ID_10001",
                        payload: error.response.data.message,
                    }); break;
                    case 10000: dispatch({
                        type: "UPDATE_DEVICE_BY_ID_10000",
                        payload: error.response.data.message,
                    }); break;
                    default: return error
                }
            }
        })

}