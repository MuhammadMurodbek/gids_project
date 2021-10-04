import React from 'react'
import {Wrapper, TextWrapper} from "./style"
import Title from "../../../atom/element_f42/title.container.f42"
import Text from "../../../atom/element_f42/text.container.f42"

const Index = () => {
    return (
        <Wrapper>
            <Title text="Men haqimda:"/>
            <TextWrapper>
                <Text title=" Bitirgan institutim:" text=" Jahon Tillar Universiteti"/><br/>
                <Text title="Yili:" text=" 2021"/><br/>
                <Text title="Mutaxxasislik:" text=" Tarjimon"/><br/>
                <Text title="Ish tajribam:" text=" 4 yil"/><br/>
                <Text title="Ish joyim:" text=" Hiltom hotel"/><br/>
                <Text title="Ish joyim:" text=" Hiltom hotel"/><br/>
                <Text title="Lavozimim:" text=" Manager"/><br/>
                <Text title="Ish vaqtim:" text=" 10:00-18:00"/><br/>
            </TextWrapper>
        </Wrapper>
    )
}

export default Index
