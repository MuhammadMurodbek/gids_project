import React from 'react'
import CitiesTitle from '../../molecules/cities'
import { Wrapper } from './style'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Truncate from 'react-truncate';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ImgContainer from "../../../components/molecules/img.container"
 
export default function index(props) {
    const { url, title, kalendar, hteg, lines, text, btnText, id, postData, setPostData, setState } = props
   
    return (
        <Wrapper>
            <Grid className="msa" container spacing={1}>
                <CitiesTitle setState={setState} title={title} kalendar={kalendar} hteg={hteg} postData={postData} setPostData={setPostData}  />
                <Grid item xs={12} md={12}>
                    <ImgContainer width="100%"  src={url} />
                </Grid>
                <Grid className="text-xitoy__more" item xs={12} md={12}>
                        <div className=" text-div ">
                            {text}
                        </div>
                        <Link className="text-link" to={`/blog/${id}` 
                        
                        }>
                            {btnText}
                           
                        </Link>
                </Grid>
            </Grid>
        </Wrapper>
    )
}
