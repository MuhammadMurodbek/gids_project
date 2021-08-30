import axios from "axios"
import { baseUrl, head_token } from "../../../api"

export const get_Org_Data_Id_Action = (id) => async (dispatch) => {

    await axios.post(`${baseUrl}/admin/settings/organization/get-by-id`, id, { headers: head_token })
        .then(response => {
            dispatch({
                type: "GET_ORG_ID_0",
                payload: response
            })
        })
        .catch(error => {
            if(error.response){
                const code = error.response.data.code
                switch (code) {
                    case 401: dispatch({
                        type: "GET_ORG_ID_401",
                        payload: "error"
                    }); break;
                    case 13002: dispatch({
                        type: "GET_ORG_ID_13002",
                        payload: "error"
                    }); break;
                    case 10001: dispatch({
                        type: "GET_ORG_ID_10001",
                        payload: "error"
                    }); break;
                    case 10000: dispatch({
                        type: "GET_ORG_ID_10000",
                        payload: "error",
                    }); break;
                    default: return error.response
                }
            }
        })

}