import axios from "axios";
import {  baseUrl, head_token } from "../../api";
import { GIDS } from "../../types/gids";

export const about_edit_bio_action = () => async (dispatch) => {
  await axios.get(`${baseUrl}/api/gids/edit/about/`, head_token)
    .then((response) => {
      // console.log(response);
      return dispatch({
        type: GIDS.ABOUT_EDIT_BIO,
        payload: response,
      });
    })
    .catch(error => {
        if(error.response) {
            return dispatch({
                type: GIDS.ABOUT_EDIT_BIO_ERROR,
                payload: error.response
            })
        }
    })
        
    
};
