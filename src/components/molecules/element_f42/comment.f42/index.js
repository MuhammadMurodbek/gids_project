import React from 'react'
import {Wrapper, RateContainer} from "./style"
import Text from "../../../atom/element_f42/text.container.f42"
import Rate from "../../../atom/rate.starts"
import { FlexContainer } from '../../../../styles/flex.container'
import { Container } from '../../../../styles/container/index.style'

const Index = () => {
    return (
        <Wrapper>
            <RateContainer><Rate size={17}/></RateContainer>
            <FlexContainer width="100%" flexDirection="column" align="center" justifyContent="space-between" gap="10px">
                <Container maxWidth="80%" padding="5px 0 0 0"><Text title="lorem  consectetur adipisicing elit. lorem  consectetur adipisicing elit A temporibus quis, " /></Container>
                <Text text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A temporibus quis, praesentium eveniet quae optio amet quibusdam odit doloremque debitis. Accusamus ipsa dolor placeat temporibus molestias nemo perspiciatis quod atque."/>
            </FlexContainer>
        </Wrapper>
    )
}

export default Index
