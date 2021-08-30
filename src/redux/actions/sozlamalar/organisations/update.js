import axios from "axios"
import { baseUrl, head_token } from "../../../api"

export const update_Org_Data_Id_Action = (state) => async (dispatch) => {

    await axios.post(`${baseUrl}/admin/settings/organization/update`, state, { headers: head_token })
        .then(response => {
            dispatch({
                type: "UPDATE_ORG_ID_0",
                payload: response
            })
            // toast.success("Updated successfully !!!")
            // window.location.href="/settings"
        })
        .catch(error => {
            const code = error.response.data.code
            switch (code) {
                case 401: dispatch({
                    type: "UPDATE_ORG_ID_401",
                    payload: "error"
                }); break;
                case 13001: dispatch({
                    type: "UPDATE_ORG_ID_13001",
                    payload: "error"
                }); break;
                case 13002: dispatch({
                    type: "UPDATE_ORG_ID_13002",
                    payload: "error"
                }); break;
                case 10001: dispatch({
                    type: "UPDATE_ORG_ID_10001",
                    payload: "error"
                }); break;
                case 10000: dispatch({
                    type: "UPDATE_ORG_ID_10000",
                    payload: "error",
                }); break;
                default: return error
            }
        })

}