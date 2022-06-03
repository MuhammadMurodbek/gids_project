import React from 'react'
import CitiesTitle from '../../molecules/cities'
import { Wrapper } from './style'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Truncate from 'react-truncate';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ImgContainer from "../../../components/molecules/img.container"
import imgpen from "./pen.svg"
import { getResponse } from '../../../hooks/response_get'
import './main.css'

export default function index(props) {
    const { url, title, kalendar, hteg, myApp, text, name1, lastName, btnText, id, postData, setPostData, setState } = props


    const handleFilter = () => {
        setPostData({ ...postData, loading: true })
        let url = `/api/posts/article/?tag=${hteg}`
        getResponse(url, setState)
    }

    return (
        <Wrapper>
            <Grid className="msa" container spacing={1}>
                <CitiesTitle setState={setState} title={title} kalendar={kalendar} hteg={hteg} postData={postData}
                    setPostData={setPostData} />

                <Grid className='img_divs' item xs={12} md={12}>
                    <ImgContainer className="imgimg" width="100%" height="400px" media_height_value="200px" src={url} />
                </Grid>

                <Grid className="text-xitoy__more" item xs={12} md={12}>

                    <div className="text-div">
                        {text}
                    </div>

                    {/* <div className="mualif-text">
                        <b className="mualif-b">Muallif: </b>
                        <span> {name1 + " " + lastName}  </span>
                    </div>
                     */}
                     
                    <div className='div_foot'>

                        <Link className="text-link" to={`/blog/${myApp ? 'my' : 'user'}/${id}`}>
                            {btnText}
                            {btnText === "Tahrirlash" ?
                                <img className='penimg' src={imgpen} alt="asdf"></img>
                                : null}
                        </Link>

                        <div className="hteg_wrapper">
                            <div className="hteg img0 tagwidth" style={{ cursor: 'pointer' }} onClick={handleFilter}> <b> {hteg} </b> </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Wrapper>
    )
}

// to={`/blog/${id}`}