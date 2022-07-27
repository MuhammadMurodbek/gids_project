import React from 'react'
import { Wrapper } from './style'
import { Grid } from '@material-ui/core'
import img2 from '../../../assets/img/request/2.svg'
import { getResponse } from '../../../hooks/response_get'
import moment from 'moment'
export default function Index(props) {
    const {title, kalendar, hteg, postData, setPostData, setState} = props 
  
    const handleFilter = () => {
        setPostData({...postData, loading: true})
        let url = `/api/posts/article/?tag=${hteg}`
        getResponse(url, setState)
    }

    return (
        <Wrapper>
            <Grid className="imte12" item xs={12} md={12}>
                <p className="xitoy-text">{title}</p>
                <div className="title-div-text">

                    <div>
                        <img className="img0" src={img2} alt="adsf"/>
                        {moment(kalendar).format('DD.MM.YYYY')}
                    </div>

                  
                </div>
            </Grid>
        </Wrapper>
    )
}
