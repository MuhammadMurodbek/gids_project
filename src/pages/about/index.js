import React from 'react';
import { Wrapper, ComponentTwo } from './index.style';
import Button from "../../components/atom/button";
import Grid from '@material-ui/core/Grid';
import { FlexContainer } from '../../styles/flex.container';
import ImgContainer from '../../components/molecules/img.container';
import img1 from '../../assets/img/about/aboutimg.svg';
import { Link } from 'react-router-dom'; 
import { TextTitle } from '../../styles/textTitle/index.style';
import {useTranslation} from 'react-i18next'
import {mediaTextField, mediaTextFieldSec, mediaImage, mediaImageSecond} from "../../custom/global.media.variables"



const mediaBtnv = {
    m_width:"400px",
    m_m_width:'280px',
}
export default function Index() {

    const {t} = useTranslation()

    return ( 

        <Wrapper>
            <ComponentTwo>
                <Grid container spacing={1} direction="row"
                    >
                    <Grid item xs={12} md={6} sm={12}>
                        <div className="container-2-1">
                            <div className="title-second-main-container-text">
                                {t("about.title")}
                            </div>
                            <div className="text_main">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam modi provident dignissimos accusamus optio aliquam assumenda omnis nisi quae fuga consequatur, numquam recusandae accusantium dolore, ipsum iure suscipit sed quia?</p>
                            </div>
                            <FlexContainer {...mediaBtnv} {...mediaImageSecond} width="370px" justifyContent="space-between">
                                <Link to="/connect">
                                    <Button type="outlined">
                                        {t("about.boglanish")}
                                    </Button>
                                </Link>
                            </FlexContainer>
                        </div>
                    </Grid>
                    <Grid justifyContent="center" item xs={12} md={6} sm={12}>
                        <ImgContainer {...mediaImage} src={img1} width="500px" />
                    </Grid>
                </Grid>

            </ComponentTwo>
        </Wrapper>

    )
}
