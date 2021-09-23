import React from 'react'
import {Wrapper} from "./style"
import Title from "../../../atom/element_f42/title.container.f42"
import Text from "../../../atom/element_f42/text.container.f42"

const Index = () => {
    return (
        <Wrapper>
            <Title text="Xabarlar"/>
            <Text title="Bir kunlik ish xajmim:" text="1805 ta so'z"/>
            <Text title="Tarjima qilish uchun foydaladigan CAT dasturlarim:" text="Translate"/>
        </Wrapper>
    )
}

export default Index
