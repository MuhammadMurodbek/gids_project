import {baseUrl, headers, head_token} from '../../redux/api'
import axios from 'axios'

export const getResponse = async(url, setState) => {
    await axios.get(`${baseUrl}${url}`, head_token)
        .then(response => setState({success: response, error:''}))
        .catch(err => setState({success:'',error: err}))
}
export const getResponseRegion = async(url) => {
    await axios.get(`${url}`, headers)
        .then(response => localStorage.setItem('countries', JSON.stringify(response?.data?.data)))
        .catch(err => console.log(err))
}
export const postResponse = async(url, data, setState) => {
    return await axios.post(`${baseUrl}${url}`,data, head_token)
        .then(response => setState ({success: response, error:''}))
        .catch(err => setState ({success:'',error: err}))
}
export const putResponse = async(url, data, setState) => {
    return await axios.put(`${baseUrl}${url}`,data, head_token)
        .then(response => setState ({success: response, error:'', loading: false}))
        .catch(err => setState ({success:'',error: err, loading: false}))
}