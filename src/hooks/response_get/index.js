import {baseUrl, head_token} from '../../redux/api'
import axios from 'axios'

export const getResponse = async(url, setState) => {
    await axios.get(`${baseUrl}${url}`, head_token)
        .then(response => setState({success: response}))
        .catch(err => setState({error: err}))
}