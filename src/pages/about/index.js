import React from 'react';
import { Wrapper, ComponentTwo } from './index.style';
import Button from "../../components/atom/button";
import Grid from '@material-ui/core/Grid';
import { FlexContainer } from '../../styles/flex.container';
import ImgContainer from '../../components/molecules/img.container';
import img1 from '../../assets/img/about/aboutimg.svg';
import { Link } from 'react-router-dom'; 

export default function index() {
    return ( 

        <Wrapper>
            <ComponentTwo>
                <div className="title-second-main-container">Biz nima taklif qilamz</div>
                <Grid container spacing={1} direction="row"
                    >
                    <Grid item md={6} sm={12}>
                        <div className="container-2-1">
                            <div className="title-second-main-container-text">Platforma haqida</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam modi provident dignissimos accusamus optio aliquam assumenda omnis nisi quae fuga consequatur, numquam recusandae accusantium dolore, ipsum iure suscipit sed quia?</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, minima.</p>
                            <FlexContainer width="370px" justifyContent="space-between">
                                <Link to="/connect">
                                <Button type="outlined">Bog’lanish</Button>
                                </Link>
                            </FlexContainer>
                        </div>
                    </Grid>
                    <Grid justifyContent="center" item md={6} sm={12}>
                        <ImgContainer src={img1} width="500px" />
                    </Grid>
                </Grid>

            </ComponentTwo>
        </Wrapper>

    )
}
