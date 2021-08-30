import axios from 'axios';
import {baseUrl, head_token} from "../../../api"

export const delete_Org_Id_Action = (id) => async (dispatch) => {
    
    await axios.post(`${baseUrl}/admin/settings/organization/delete`, id, {headers:head_token})
        .then(response => {
            dispatch({
                type:"DELETE_ORG_0",
                payload:response
            })
        })
        .catch(error => {
            const code = error.response.data.code
            switch(code) {
                case 401:dispatch({
                    type:"DELETE_ORG_401",
                    payload: error.response.data.message, 
                }); break;
                case 13002: dispatch({
                    type:"DELETE_ORG_13002",
                    payload: error.response.data.message,
                }); break;
                case 10001: dispatch({
                    type:"DELETE_ORG_10001",
                    payload: error.response.data.message
                }); break;
                case 10000: dispatch({
                    type:"DELETE_ORG_10000",
                    payload: error.response.data.message,
                }); break;
                default: return error
            }
        })

}