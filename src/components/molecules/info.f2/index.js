import React from 'react'
import {WrapperInfoF2} from "./style"
import {FlexContainer} from "../../../styles/flex.container"
import ImgContainer from "../../img.container"
import starImg from "../../../assets/img/choosegid/star1.svg"
import extraImg from "../../../assets/img/choosegid/extra.svg"
import comment from "../../../assets/img/choosegid/comment.svg"
const Index = () => {
    return (
        <WrapperInfoF2> 
            <FlexContainer width="300px" alignItems="center" justifyContent="flex-start" flexDirection="column">
                <FlexContainer width="200px" alignItems="center">
                    <ImgContainer src={starImg} width="30px"/>
                    <div><span>10.0</span>/10</div>
                </FlexContainer>
                <FlexContainer width="200px" alignItems="center">
                    <ImgContainer src={comment} width="30px"/>
                    <div><span>10.0</span>/10</div>
                </FlexContainer>
                <FlexContainer width="200px" alignItems="center">
                    <ImgContainer src={extraImg} width="30px"/>
                    <div><span>10.0</span>/10</div>
                </FlexContainer>
            </FlexContainer>
        </WrapperInfoF2>
    )
}

export default Index
