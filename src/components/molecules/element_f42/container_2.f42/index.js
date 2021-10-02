import React from 'react'
import {Wrapper, TextWrapper} from "./style"
import Title from "../../../atom/element_f42/title.container.f42"
import Text from "../../../atom/element_f42/text.container.f42"

const Index = () => {
    return (
        <Wrapper>
            <Title text="Men haqimda:"/>
            <TextWrapper>
                <Text title="Bitirgan institutim:" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, eligendi!"/>
                <Text title="Yili:" text="2021"/>
                <Text title="Mutaxxasislik:" text="Tarjimon"/>
                <Text title="Ish tajribam:" text="4 yil"/>
                <Text title="Ish joyim:" text="Hiltom hotel"/>
                <Text title="Ish joyim:" text="Hiltom hotel"/>
                <Text title="Lavozimim:" text="Manager"/>
                <Text title="Ish vaqtim:" text="10:00-18:00"/>
            </TextWrapper>
        </Wrapper>
    )
}

export default Index
