import React from 'react'
import { Wrapper } from './style'
import { Grid } from '@material-ui/core'
import img2 from '../../../assets/img/request/2.svg'
import img3 from '../../../assets/img/request/3.svg'

export default function Index(props) {
    const {title, kalendar, hteg} = props 
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
                       <div className="hteg">{hteg}</div>
                    </div>
                </div>
            </Grid>
        </Wrapper>
    )
}
