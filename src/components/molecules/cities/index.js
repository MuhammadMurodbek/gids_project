import React, {useState} from 'react'
import { Wrapper } from './style'
import { Grid } from '@material-ui/core'
import img2 from '../../../assets/img/request/2.svg'
import img3 from '../../../assets/img/request/3.svg'
import { getResponse } from '../../../hooks/response_get'

export default function Index(props) {
    const {title, kalendar, hteg} = props 
    const [postData, setPostData] = useState({ success: '', error: '', loading: false})
    const handleFilter = () => {
        setPostData({...postData, loading: true})
        let url = `/api/posts/article/?tag=${hteg}`
        getResponse(url, setPostData)
    }
    console.log(hteg)
    return (
        <Wrapper>
            <Grid className="imte12" item xs={12} md={12}>
                <p className="xitoy-text">{title}</p>
                <div className="title-div-text">
                    <div>
                        <img className="img0" src={img2} alt="adsf" />
                        {kalendar}
                    </div>
                    <div className="hteg_wrapper">
                        <img className="img0" src={img3} alt="asdf" />
                       <div className="hteg" style={{cursor:'pointer'}} onClick={handleFilter}>{hteg}</div>
                    </div>
                </div>
            </Grid>
        </Wrapper>
    )
}
