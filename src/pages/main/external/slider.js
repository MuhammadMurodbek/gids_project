import { Grid } from '@material-ui/core';
import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import {Container} from "../../../styles/container/index.style"
import ImageContainer from "../../../components/img.container"
import {SliderContainer, stylesBgColor, styleContainer} from "./slider.style"
import {TextTitle} from "../../../styles/textTitle/index.style"
import {FlexContainer} from "../../../styles/flex.container"

const Slider = () => {
    return (<>
        <TextTitle top="50px" bottom="-50px">Mijozlarimizning fikrlari</TextTitle>
        <AwesomeSlider mobileTouch={true} bullets={false}>
            <div style={stylesBgColor}>
                <Container style={styleContainer}>
                    <SliderContainer>
                        <Grid container spacing={1}>
                            <Grid item sm={12} md={4} style={{padding: 0}}>
                                <ImageContainer 
                                    width="100%"
                                    height="350px"
                                    // radius="4px"
                                    src="https://lh3.googleusercontent.com/proxy/jNm8UXv72uRliyveP2i6Gujn2X6TdFpgw9FSPnihiGDaLiyIW-5s7eSsfFiK15Q9yun2UMiELXR133yEWgT7r1fbkw3MvbKwUXHOm08lwOKUYU9etA6o9aezsHkSfNKOSUHosQRUkAG3eIFaXbcQXnVAopEk8ifzIg"
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
                </Container>
            </div>
            <div style={stylesBgColor}>
                
            </div>
        </AwesomeSlider>
        </>
    )
}

export default Slider
