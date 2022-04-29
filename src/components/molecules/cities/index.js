import React, {useState} from 'react'
import { Wrapper } from './style'
import { Grid } from '@material-ui/core'
import img2 from '../../../assets/img/request/2.svg'
import img3 from '../../../assets/img/request/3.svg'
import { getResponse } from '../../../hooks/response_get'

export default function Index(props) {
    const {title, kalendar, hteg, postData, setPostData, setState} = props 
  
    const handleFilter = () => {
        setPostData({...postData, loading: true})
        let url = `/api/posts/article/?tag=${hteg}`
        getResponse(url, setState)
    }

    // console.log(hteg)

    return (
        <Wrapper>
            <Grid className="imte12" item xs={12} md={12}>
                <p className="xitoy-text">{title}</p>
                <div className="title-div-text">

                    <div>
                        <img className="img0" src={img2} alt="adsf"/>
                        {kalendar}
                    </div>

                  
                </div>
            </Grid>
        </Wrapper>
    )
}
