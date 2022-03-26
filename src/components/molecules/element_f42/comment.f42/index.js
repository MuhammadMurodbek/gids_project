import React from 'react'
import { Wrapper, RateContainer } from "./style"
import Text from "../../../atom/element_f42/text.container.f42"
import Rate from "../../../atom/rate.starts"
import { FlexContainer } from '../../../../styles/flex.container'
import { Container } from '../../../../styles/container/index.style'
const media = {
    m_width: '600px',
    // m_margin:'10px 0 0',
}
const Index = ({data}) => {
    
    return (
        <Wrapper>
            <RateContainer>
                <Rate size={17} value={data?.rating} disabled/>
            </RateContainer>
            <FlexContainer {...media} width="100%" flexDirection="column" align="center" justifyContent="space-between" gap="10px">
                <Container maxWidth="80%" padding="5px 0 0 0">
                    <img src={data?.image} alt="image" className="image_comment"/>
                    <Text title={data?.full_name?.first_name + " " + data?.full_name?.last_name} />
                </Container>
                <Text text={data?.comment} />
            </FlexContainer>
        </Wrapper>
    )
}

export default Index
