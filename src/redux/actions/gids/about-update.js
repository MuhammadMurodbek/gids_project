import axios from "axios";
import {  baseUrl, head_token } from "../../api";
import { GIDS } from "../../types/gids";

export const about_update_bio_action = () => async (dispatch) => {
  await axios.put(`${baseUrl}/api/gids/edit/about/`, head_token)
    .then((response) => {
      // console.log(response);
      return dispatch({
        type: GIDS.ABOUT_UPDATE_BIO,
        payload: response,
      });
    })
    .catch(error => {
        if(error.response) {
            return dispatch({
                type: GIDS.ABOUT_UPDATE_BIO_ERROR,
                payload: error.response
            })
        }
    })
        
    
};
