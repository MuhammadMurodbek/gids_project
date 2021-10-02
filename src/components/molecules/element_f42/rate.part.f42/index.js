import React from 'react'
import {Wrapper, PercentCount, RateWrapper} from './style'
import Rate from "../../../atom/rate.starts"

const Index = () => {
    return (
        <Wrapper>
            <PercentCount>
                <div className="main">23</div><div className="extra">/30</div>
            </PercentCount>
            <RateWrapper>
                <Rate  disabled/>
            </RateWrapper>
        </Wrapper>
    )
}

export default Index
