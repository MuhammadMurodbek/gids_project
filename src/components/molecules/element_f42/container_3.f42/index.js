import React from 'react'
import {Wrapper} from "./style"
import Title from "../../../atom/element_f42/title.container.f42"
import Text from "../../../atom/element_f42/text.container.f42"
import {FlexContainer} from "../../../../styles/flex.container"
const Index = () => {
    return (
        <Wrapper>
            <Title text="Xabarlar"/>
            <Text title="Bir kunlik ish xajmim:" text="1805 ta so'z"/>
            <Text title="Tarjima qilish uchun foydaladigan CAT dasturlarim:" text="Translate"/>
            <FlexContainer width="60%" margin="15px 0">
                <div>
                    <Text title="Og'zaki tarjima (sinxron)" check/>
                    <Text title="Shoshilinch buyurtmalar" check/>
                </div>
                <div>
                    <Text title="Dam olish kunlari" check/>
                    <Text title="Matnlarni tahrirlash" check/>
                </div>
            </FlexContainer>
            <Text title="Mavzular:"/>
            <Text display="block" text="Umumiy mavzular - Meni mavzuyim emas"/>
            <Text display="block" text="Jamiyat va siyosat - Meni mavzuyim emas"/>
            <Text display="block" text="Iqtisodiyot va moliya - Meni mavzuyim emas"/>
            <Text display="block" text="Huquqshunoslik - Meni mavzuyim emas"/>
            <Text display="block" text="Axborot texnologiyalari - Meni mavzuyim emas"/>
            <Text display="block" text="Reklama va marketing - Meni mavzuyim emas"/>
            <Text display="block" text="Sanoat va texnologiya - Meni mavzuyim emas"/>
            <Text display="block" text="Neft va gaz - Meni mavzuyim emas"/>
            <Text display="block" text="Iqtisodiyot va moliya - Meni mavzuyim emas"/>
            <Text display="block" text="Ilmiy va texnik adabiyotlar - Meni mavzuyim emas"/>
            <Text display="block" text="Badiiy adabiyot - Meni mavzuyim emas"/>
        </Wrapper>
    )
}

export default Index
