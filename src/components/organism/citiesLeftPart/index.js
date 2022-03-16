import React from 'react'
import CitiesTitle from '../../molecules/cities'
import { Wrapper } from './style'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Truncate from 'react-truncate';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ImgContainer from "../../../components/molecules/img.container"
import imgpen from "./pen.svg"

export default function index(props) {
    const { url, title, kalendar, hteg, myApp, text, btnText, id, postData, setPostData, setState  } = props

    return (
        <Wrapper>
            <Grid className="msa" container spacing={1}>
                <CitiesTitle setState={setState} title={title} kalendar={kalendar} hteg={hteg} postData={postData} 
                setPostData={setPostData}/>

                <Grid className='img_divs' item xs={12} md={12}>
                    
                    <ImgContainer   className="imgimg" width="100%" height="400px" media_height_value="200px" src={url} />
                   
                </Grid>
                <Grid className="text-xitoy__more" item xs={12} md={12}>
                    <div className=" text-div ">
                        {text}
                    </div>
                    <Link className="text-link" to={`/blog/${myApp ? 'my' : 'user'}/${id}`}>
                        {btnText}
                        {btnText === "Tahrirlash" ? <img className='penimg' src={imgpen} alt="asdf"></img> : null}

                    </Link>
                </Grid>
            </Grid>
        </Wrapper>
    )
}

// to={`/blog/${id}`}