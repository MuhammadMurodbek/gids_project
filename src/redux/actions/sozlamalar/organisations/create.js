import {baseUrl, head_token} from "../../../api"
import axios from "axios"

export const post_Org_Create_Action = (state) => async (dispatch) => {
   
    await axios.post(`${baseUrl}/admin/settings/organization/create`, state, {headers:head_token})
        .then(response => {
            dispatch({
                type:"POST_ORG_CREATE_0",
                payload:response,
            })
        })
        .catch(error => {
            const code = error.response.data.code
            switch(code){
                case 401: dispatch({
                    type:"POST_ORG_CREATE_401",
                    payload:"Auth error"
                }); break;
                case 13001: dispatch({
                    type:"POST_ORG_CREATE_13001",
                    payload:"Already exist",
                }); break;
                case 10001 : dispatch({
                    type:"POST_ORG_CREATE_10001",
                    payload:"validation error"
                }); break;
                case 10000 : dispatch({
                    type:"POST_ORG_CREATE_10000",
                    payload:"Invalid error"
                }); break;
                default: return error
            }
            // console.log(error.response)
        })
   
}