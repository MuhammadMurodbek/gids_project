import React from 'react'
import CitiesTitle from '../../molecules/cities'
import { Wrapper } from './style'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Truncate from 'react-truncate';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ImgContainer from "../../../components/molecules/img.container"
// import xitoy from '../../../assets/img/citiyes/xitoy.png';

export default function index(props) {
    const { url, title, kalendar, hteg, lines, text, btnText, id } = props
   
    return (
        <Wrapper>
            <Grid className="msa" container spacing={1}>
                <CitiesTitle title={title} kalendar={kalendar} hteg={hteg} />
                <Grid item xs={12} md={12}>
                    <ImgContainer width="100%" src={url} />
                </Grid>
                <Grid className="text-xitoy__more" item xs={12} md={12}>
                    
                        <div className=" text-div ">
                            {text}
                        </div>
                   
                        <Link className="text-link" to={`/fullData/${id}` 
                        
                        }>
                            {btnText}
                           
                        </Link>
                </Grid>
            </Grid>
        </Wrapper>
    )
}
