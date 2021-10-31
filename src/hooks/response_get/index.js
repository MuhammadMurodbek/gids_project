import {baseUrl, head_token} from '../../redux/api'
import axios from 'axios'

export const getResponse = async(url, setState) => {
    await axios.get(`${baseUrl}${url}`, head_token)
        .then(response => setState({success: response, error:''}))
        .catch(err => setState({success:'',error: err}))
}
export const postResponse = async(url, data, setState) => {
    return await axios.post(`${baseUrl}${url}`,data, head_token)
        // .then(response => return ({success: response, error:''}))
        // .catch(err => return ({success:'',error: err}))
}