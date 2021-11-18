import React from 'react'
import { Wrapper } from "./style"
import Title from "../../../atom/element_f42/title.container.f42"
import Text from "../../../atom/element_f42/text.container.f42"
import { FlexContainer } from "../../../../styles/flex.container"
import cheked from '../../../../assets/img/boglanish/cheked.svg'
import { Grid } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const Index = () => {
    const { t } = useTranslation()
    const getRole = JSON.parse(localStorage.getItem("user_token"))

    return (
        <Wrapper>
            <Title text="Xizmatlar" />

            {
                getRole?.role === 'writer' ?

                    (
                        <>
                            <Text title="Bir kunlik ish xajmim:" text="1805 ta so'z" /> <br /><br />
                            <Text title="Tdaladigaarjima qilish uchun foyn CAT dasturlarim:" text="Translate" />
                            <FlexContainer width="70%" margin="15px 0">
                                <Grid container spacing={1} className="gridCon">
                                    <Grid item md={6} className="as">
                                        <img src={cheked} alt="adfdd" className="classed" /> <Text title="Og'zaki tarjima (sinxron)" /><br />
                                        <img src={cheked} alt="adfdd" className="classed" /> <Text title="Shoshilinch buyurtma" />
                                    </Grid>
                                    <Grid item md={6} >
                                        <img src={cheked} alt="adfdd" className="classed" /> <Text title="Og'zaki tarjima (sinxron)" /><br />
                                        <img src={cheked} alt="adfdd" className="classed" /> <Text title="Shoshilinch buyurtma" />
                                    </Grid>
                                </Grid>
                            </FlexContainer>
                            <Text title="Mavzular:" />
                            <Text display="block" text="Umumiy mavzular - Meni mavzuyim emas" />
                            <Text display="block" text="Jamiyat va siyosat - Meni mavzuyim emas" />
                            <Text display="block" text="Iqtisodiyot va moliya - Meni mavzuyim emas" />
                            <Text display="block" text="Huquqshunoslik - Meni mavzuyim emas" />
                            <Text display="block" text="Axborot texnologiyalari - Meni mavzuyim emas" />
                            <Text display="block" text="Reklama va marketing - Meni mavzuyim emas" />
                            <Text display="block" text="Sanoat va texnologiya - Meni mavzuyim emas" />
                            <Text display="block" text="Neft va gaz - Meni mavzuyim emas" />
                            <Text display="block" text="Iqtisodiyot va moliya - Meni mavzuyim emas" />
                            <Text display="block" text="Ilmiy va texnik adabiyotlar - Meni mavzuyim emas" />
                            <Text display="block" text="Badiiy adabiyot - Meni mavzuyim emas" />
                        </>
                    )
                    : null
            }
            {
                getRole?.role === 'translator' ?
                    (<>
                        <img src={cheked} alt="adfdd" className="classed" /> <Text title=" Sinxron" /><br />
                        <Text title="Mavzular:" />
                        <Text display="block" text="Umumiy mavzular - Meni mavzuyim emas" />
                        <Text display="block" text="Jamiyat va siyosat - Meni mavzuyim emas" />
                        <Text display="block" text="Iqtisodiyot va moliya - Meni mavzuyim emas" />
                        <Text display="block" text="Huquqshunoslik - Meni mavzuyim emas" />
                        <Text display="block" text="Axborot texnologiyalari - Meni mavzuyim emas" />
                        <Text display="block" text="Reklama va marketing - Meni mavzuyim emas" />
                        <Text display="block" text="Sanoat va texnologiya - Meni mavzuyim emas" />
                        <Text display="block" text="Neft va gaz - Meni mavzuyim emas" />
                        <Text display="block" text="Iqtisodiyot va moliya - Meni mavzuyim emas" />
                        <Text display="block" text="Ilmiy va texnik adabiyotlar - Meni mavzuyim emas" />
                        <Text display="block" text="Badiiy adabiyot - Meni mavzuyim emas" />
                    </>)
                    : null
            }

            {
                getRole?.role === 'gid' ?
                    (
                        <>

                            <FlexContainer width="70%" margin="15px 0">
                                <Grid container spacing={1} className="gridCon">
                                    <Grid item md={6} className="as">
                                        <img src={cheked} alt="adfdd" className="classed" />
                                        <Text title="Ekskursiyalar" /><br />
                                        <img src={cheked} alt="adfdd" className="classed" />
                                        <Text title="Og'zaki tarjima (ketma-ket)" />
                                    </Grid>
                                    <Grid item md={6} >
                                        <img src={cheked} alt="adfdd" className="classed" />
                                        <Text title="Sinxron tarjima" /><br />
                                        <img src={cheked} alt="adfdd" className="classed" />
                                        <Text title="Shoshilinch buyurtma" />
                                    </Grid>
                                </Grid>
                            </FlexContainer>
                            <div class="box">
                                <Text title="Ekskursiyalar : " />
                                <div class="box_child">
                                    <span>Rossiya - Maskva</span>
                                    <span>Amerika - Nyu York</span>
                                    <span>Qozog'iston - Dushanbe</span>
                                    <span>O'zbekiston - Toshkent</span>
                                </div>
                            </div>
                        </>
                    )
                    : null
            }
        </Wrapper>
    )
}

export default Index
// < div >
// <img src={cheked} alt="adfdd" className="classed" /> <Text title="Og'zaki tarjima (sinxron)" />
// <img src={cheked} alt="adfdd" className="classed" /> <Text title="Shoshilinch buyurtmalar" />
// </ >
// <div >
// <img src={cheked} alt="adfdd" className="classed" /> <Text title="Dam olish kunlari" />
// <img src={cheked} alt="adfdd" className="classed" /> <Text title="Matnlarni tahrirlash" />
// </div>
// <div >
// <img src={cheked} alt="adfdd" className="classed" /> <Text title="Dam olish kunlari" />
// <img src={cheked} alt="adfdd" className="classed" /> <Text title="Matnlarni tahrirlash" />
// </div>