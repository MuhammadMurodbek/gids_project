import { Grid } from '@material-ui/core';
import React from 'react'
import Slider from "react-slick"
import 'react-awesome-slider/dist/styles.css';
import {Container} from "../../../styles/container/index.style"
import ImageContainer from "../../../components/img.container"
import {SliderContainer, Wrapper} from "./slider.style"
import {TextTitle} from "../../../styles/textTitle/index.style"
import {FlexContainer} from "../../../styles/flex.container"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <ChevronLeftIcon
            className="left-icon"
            onClick={onClick} 
            style={{...style}} 
            fontSize="large"
        />
    );
  }
  
  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <ChevronRightIcon 
            className="right-icon"
            onClick={onClick} 
            style={{...style}} 
            fontSize="large"
        />
    );
  }

const Index = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <Wrapper>
            <TextTitle top="50px" bottom="50px">Mijozlarimizning fikrlari</TextTitle>
            <Container padding="10px 40px" >
                <Slider {...settings} className="slider-component">
                    <SliderContainer>
                        <Grid container spacing={1}>
                            <Grid item sm={12} md={4} style={{padding: 0}}>
                                <ImageContainer 
                                    width="100%"
                                    height="350px"
                                    src="https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406_source.jpg?w=590&h=800&ACB6A419-81EB-4B9C-B846FD8EBFB16FBE"
                                />
                            </Grid>
                            <Grid item sm={12} md={8}>
                                <Container>
                                    <FlexContainer width="100%" alignItems="center" justifyContent="space-between">
                                        <div>O'zbegim</div>
                                        <div>23.06.2021</div>
                                    </FlexContainer>
                                </Container>
                                <Container style={{textAlign: 'justify'}}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus totam provident quo, maxime in architecto temporibus non? Minus inventore deserunt voluptatem vitae. Tempora nostrum at maxime? Repellat fuga cupiditate dolor.
                                </Container>
                            </Grid>
                        </Grid>
                    </SliderContainer>
                    <SliderContainer>
                        <Grid container spacing={1}>
                            <Grid item sm={12} md={4} style={{padding: 0}}>
                                <ImageContainer 
                                    width="100%"
                                    height="350px"
                                    // radius="4px"
                                    src="https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406_source.jpg?w=590&h=800&ACB6A419-81EB-4B9C-B846FD8EBFB16FBE"
                                />
                            </Grid>
                            <Grid item sm={12} md={8}>
                                <Container>
                                    <FlexContainer width="100%" alignItems="center" justifyContent="space-between">
                                        <div>O'zbegim</div>
                                        <div>23.06.2021</div>
                                    </FlexContainer>
                                </Container>
                                <Container style={{textAlign: 'justify'}}>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus totam provident quo, maxime in architecto temporibus non? Minus inventore deserunt voluptatem vitae. Tempora nostrum at maxime? Repellat fuga cupiditate dolor.
                                </Container>
                            </Grid>
                        </Grid>
                    </SliderContainer>
                </Slider>
            </Container>
        </Wrapper>
    )
}

export default Index