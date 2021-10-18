// import { Grid } from '@material-ui/core'
import React from 'react'
import {Wrapper, FlexItem} from "./style"
import ImageContainer from "../../../components/molecules/img.container"
import imageRound from "../../../assets/img/choosegid/round.svg"
import {TextTitle} from "../../../styles/textTitle/index.style"
import { Container } from '../../../styles/container/index.style'
import {shadow} from "../../../styles/global/colors"
import { FlexContainer } from '../../../styles/flex.container'
import icon1 from "../../../assets/img/gid-personal/icon_1.svg"
import icon2 from "../../../assets/img/gid-personal/icon_2.svg"
import {mediaTextField, mediaTextFieldSec} from "../../../custom/global.media.variables"
const mediaFlex = {
    m_width:'742px',
    m_direction:"column",
}
const mediaImage = {
    m_width:"745px",
    m_m_width:'220px',
} 
const mediaTextFieldExternal = {
    m_width_ext:'500px',
    m_text_align_ext:'center',
}
const mediaFlexFooter = {
    m_width:'500px',
    m_margin:'0',
    m_direction:'column',
}
const Index = () => {
    return (
        <Wrapper>
            <Container padding="10px" className="container-shadow" boxShadow={shadow}>
                <FlexContainer maxWidth="800px" {...mediaFlex}>
                    <FlexItem className="flex-item-one">
                        <ImageContainer {...mediaImage} src={imageRound} width="120px"/>
                    </FlexItem>
                    <FlexItem className="flex-item-two">
                        <FlexContainer flexDirection="column" height="100%" justifyContent="space-around">
                            <TextTitle {...mediaTextField} {...mediaTextFieldSec} {...mediaTextFieldExternal} left="30px" font="34px" align="left">Abdug’ani Mirsaidov</TextTitle>
                            <FlexContainer {...mediaFlexFooter} width="100%" margin="0 0 0 30px">
                                <div className="icon-text"><ImageContainer src={icon1} width="20px"/><div>Angliya, London</div></div>
                                <div className="icon-text two"><ImageContainer width="20px" src={icon2}/><div>kun.uz company</div></div>
                            </FlexContainer>
                        </FlexContainer>
                    </FlexItem>
                    
                </FlexContainer>
            </Container>
        </Wrapper>
    )
}

export default Index
