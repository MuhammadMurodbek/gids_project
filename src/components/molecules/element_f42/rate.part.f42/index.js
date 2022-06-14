import React from 'react'
import { Wrapper, PercentCount, RateWrapper } from './style'
import Rate from "../../../atom/rate.starts"

const Index = ({ data }) => {
    const checkPercent = (item) => {
        let array1 = item?.map(item=>item.rating)
        const initialValue = 0;
        const sumWithInitial = array1.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue
        );
        return sumWithInitial
    }
    return (
        <Wrapper>
            <PercentCount>
                <div className="main">{data?.average || '0'}</div><div className="extra">/5</div>
            </PercentCount>
            <RateWrapper>
                <Rate value={data?.average} disabled />
            </RateWrapper>
        </Wrapper>
    )
}

export default Index
