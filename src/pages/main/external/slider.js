import { Grid } from '@material-ui/core';
import React from 'react'
import Slider from "react-slick"
import 'react-awesome-slider/dist/styles.css';
import { Container } from "../../../styles/container/index.style"
import ImageContainer from "../../../components/molecules/img.container"
import { SliderContainer, Wrapper } from "./slider.style"
import { TextTitle } from "../../../styles/textTitle/index.style"
import { FlexContainer } from "../../../styles/flex.container"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useTranslation } from 'react-i18next';

import bu from './sliderimg/buhoromijoz.webp'
import sa from './sliderimg/smarqand.webp'
import to from './sliderimg/toshkentmijoz.webp'

function SampleNextArrow(props) {
    const { t } = useTranslation()
    const { style, onClick } = props;
    return (
        <ChevronLeftIcon
            className="left-icon"
            onClick={onClick}
            style={{ ...style }}
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
            style={{ ...style }}
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
    const mediaContainer = {
        m_width: "500px",
        m_padding: "10px 0",
    }
    const mediaTextField = {
        m_width: "1045px",
        m_font_size: "24px",
    }
    const mediaTextFieldSec = {
        m_width_sec: "500px",
        m_font_size_sec: "20px",
    }
    const mediaImage = {
        media_height: "600px",
        media_height_value: "200px",
        media_width_value: "100%",
    }
    return (
        <Wrapper>
            <TextTitle {...mediaTextField} {...mediaTextFieldSec} top="50px" bottom="50px">   </TextTitle>
            <Container {...mediaContainer} padding="10px 20px" >
                <Slider {...settings} className="slider-component">
                    {/* <SliderContainer>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={4} style={{ padding: 0 }}>
                                <ImageContainer
                                    width="100%"
                                    height="350px"
                                    {...mediaImage}
                                    src={bu}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={8}>
                                <Container>
                                    <FlexContainer width="100%" alignItems="center" justifyContent="space-between">
                                        <div>Gid Nodir Jumaev</div>
                                        <div>07.04.2022</div>
                                    </FlexContainer>
                                </Container>
                                <Container style={{ textAlign: 'justify' }}>
                                    <div className="slick_text">
                                        Спасибо Нодиру! Очень душевная приятная атмосфера на экскурсии! Не спеша, с удовольствием прогулялись с Нодиром по Бухаре. Получили ответы на свои вопросы. Формат экскурсии — то, что нужно. Спасибо!
                                        <br />
                                        <b>Юлия</b> (Брест, Беларусь)

                                    </div>
                                </Container>
                            </Grid>
                        </Grid>
                    </SliderContainer> */}
                    <SliderContainer>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={4} style={{ padding: 0 }}>
                                <ImageContainer
                                    width="100%"
                                    height="350px"
                                    {...mediaImage}
                                    src={to}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={8}>
                                <Container>
                                    <FlexContainer width="100%" alignItems="center" justifyContent="space-between">
                                        <div>Gid: Aziz Xalmuradov </div>
                                        <div>23.06.2021</div>
                                    </FlexContainer>
                                </Container>
                                <Container style={{ textAlign: 'justify' }}>
                                    <div className="slick_text">
                                        Азиз перевернул мой взгляд на Узбекистан. Его профессионализм, глубокие знания истории, необыкновенная коммуникабельность, интеллигентность не оставляют шансов на безразличие. Очень пожалели, что наше путешествие с Азизом ограничилось только Ташкентом и мы не ангажировали его в поездки по Бухаре и Самарканду. Покидала Узбекистан с чувством ожидания новой встречи. И все это ваша заслуга! Спасибо большое Вам, Азиз!
                                        <br />
                                        <b> Еляна </b> (Москва, Россия)
                                    </div>
                                </Container>
                            </Grid>
                        </Grid>
                    </SliderContainer>
                    <SliderContainer>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={4} style={{ padding: 0 }}>
                                <ImageContainer
                                    width="100%"
                                    height="350px"
                                    {...mediaImage}
                                    src={sa}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={8}>
                                <Container>
                                    <FlexContainer width="100%" alignItems="center" justifyContent="space-between">
                                        <div>Gid: Lola Ikramova</div>
                                        <div>20.09.2021</div>
                                    </FlexContainer>
                                </Container>
                                <Container style={{ textAlign: 'justify' }}>
                                    <div className="slick_text">
                                        Для спокойного дня и внимания эпох которые оставили след столетий мы решили прибегнуть к помощи Лолы. О своём выборе могу сказать это правильный и определённо удачный выбор. С первой минуты и до окончания общения все строиться на спокойном и размеренно лёгком общении внутри которого можно и улочки осмотреть и ковры потрогать. Очень точно подобрано место для отдыха в течении прогулки. Очень качественно и не спешно можно купить то что по душе. Рекомендую путешественникам со стажем и пониманием. Ещё раз спасибо из Таганрога.
                                        <br />
                                        <b>Виталий Мединский</b> (Таганрог, Россия)

                                    </div>
                                </Container>
                            </Grid>
                        </Grid>
                    </SliderContainer>
                    {/* <SliderContainer>
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
                    </SliderContainer> */}
                </Slider>
            </Container>
        </Wrapper>
    )
}

export default Index
