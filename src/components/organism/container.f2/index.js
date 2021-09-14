import React from 'react'
import { FlexContainer } from '../../../styles/flex.container'
import {Container} from "../../../styles/container/index.style"
import {WrapperContainer} from "./style"
import Info from "../../molecules/info.f2"
import RoundImageContainer from "../../molecules/round.img.f2"
import InfoBtn from "../../molecules/info.btn.f2"
import RoundImage from "../../../assets/img/choosegid/round.svg"

const Index = () => {
    return (
        <WrapperContainer>
            <FlexContainer width="100%" alignItems="center" justifyContent="space-between">
                <Container>
                    <FlexContainer width="100%" alignItems="center" justifyContent="space-between" flexDirection="column">
                        <RoundImageContainer src={RoundImage}/>
                        <Info/>
                    </FlexContainer>
                </Container>
                <Container>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias culpa sit labore distinctio nobis quas iure eos dolores laudantium, deserunt, fugit, perspiciatis exercitationem fuga repudiandae pariatur nihil eaque facilis laboriosam.
                </Container>
                <Container>
                    <InfoBtn/>
                </Container>
            </FlexContainer>
        </WrapperContainer>
    )
}

export default Index
