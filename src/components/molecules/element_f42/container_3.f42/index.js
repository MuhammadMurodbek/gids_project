import React from 'react'
import { Wrapper } from "./style"
import Title from "../../../atom/element_f42/title.container.f42"
import Text from "../../../atom/element_f42/text.container.f42"
import { FlexContainer } from "../../../../styles/flex.container"
import cheked from '../../../../assets/img/boglanish/cheked.svg'
import { Grid } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
// import { getLabelCountrySecond, getLabelCity } from "../../../../custom/function"
import {TextSpan} from "./style"
const Index = ({ data, role }) => {
    const { t } = useTranslation()
    const lan = localStorage.getItem("i18nextLng")
    // const getRole = JSON.parse(localStorage.getItem("user_token"))
    const obj = {
        no: 'Mening mavzuim emas',
        great: "A'lo",
        good: "Yaxshi",
        low: 'Quyi',
    }
    
    // console.log(data)
    return (
        <Wrapper>
            <Title text="Xizmatlar" />

            {
                role === 'writer' ?

                    (
                        <>
                            <Text title="Bir kunlik ish xajmi:" text={<TextSpan style={{fontWeight:'400'}}>&nbsp;{data?.daily_workload}&nbsp;<span style={{textTransform:'lowercase'}}>belgi</span></TextSpan> } /> <br />
                            <Text title="Og’zaki tarjima:" text={<span>&nbsp;{data?.can_oral_translate ? 'Ha (Sinxron)':"Yo'q"}&nbsp;</span> } /> <br />
                            <Text title="Shoshilinch buyurtmalar:" text={<span>&nbsp;{data?.express_order ? 'Ha':"Yo'q"}&nbsp;</span> } /> <br />
                            <Text title="Dam olish kunlari buyurtma qabul qilish:" text={<span>&nbsp;{data?.weekend_order ? 'Ha':"Yo'q"}&nbsp;</span> } /> <br />
                            <Text title="Matnlarni tahrirlash:" text={<span>&nbsp;{data?.edit_text ? 'Ha':"Yo'q"}&nbsp;</span> } /> <br />
                            <Text title="Internetga doimiy kirish imkoni:" text={<span>&nbsp;{data?.always_online  ? 'Ha':"Yo'q"}&nbsp;</span> } /> <br />
                            <Text title="Katta hajmdagi fayllarni qabul qilish:" text={<span>&nbsp;{data?.always_online ? 'Ha':"Yo'q"}&nbsp;</span> } /> <br />
                            <Text title="Tarjima qilish uchun CAT dasturlari:" text={data?.cat_programmes?.length>0 ? data?.cat_programmes?.map(a => <span style={{textTransform:'capitalize'}}>{" " + a + ","}</span>):" Ma'lumot kiritilmagan"} />
                            
                            { data?.themes?.length>0 && <div style={{marginTop:10}}> <Text title="Mavzular:" /></div>}
                            
                            <div className='mavzulardd'>
                                {
                                    data?.themes?.map((prev, index) => (
                                        <Text key={index} display="block" text={<><TextSpan>{prev?.name}</TextSpan> - <TextSpan style={{fontWeight:'400'}}>{obj[prev?.level]}</TextSpan></>} />
                                    ))
                                }
                            </div>
                        </>
                    )
                    : null
            }
            {
                role === 'translator' ?
                    (<>
                        {/* <img src={cheked} alt="adfdd" className="classed" /> <Text title=" Sinxron" /><br /> */}
                        <Text title="Mavzular:" />
                        {
                            data?.themes?.map((prev, index) => (
                                <Text key={index} display="block" text={<><TextSpan>{prev?.name}</TextSpan> - <TextSpan style={{fontWeight:'400'}}>{obj[prev?.level]}</TextSpan></>} />
                            ))
                        }
                    </>)
                    : null
            }

            {
                role === 'gid' ?
                    (
                        <>
                        

                            <FlexContainer width="70%" margin="15px 0">
                                <Grid container spacing={1} className="gridCon">
                                    <Grid item md={12} className="as">
                                        {/* {data?.excursions?.length > 0 ? */}
                                            <FlexContainer justifyContent="flex-start" margin="0 0 5px">
                                                <Text title="Ekskursiyalar :" /> <span className="yes_no">{data?.excursions?.length > 0 ? "Ha":"Yo'q"}</span>
                                            </FlexContainer>
                                            {/* : null} */}
                                        {/* {
                                            data?.consecutive_translate ? */}
                                                <FlexContainer margin="0 0 5px">
                                                    <Text title="Og'zaki tarjima (ketma-ket) :" /><span className="yes_no">{data?.consecutive_translate ? "Ha":"Yo'q"}</span>
                                                </FlexContainer>
                                        {/* } */}
                                         {/* {
                                            data?.synchronous_translate ? */}
                                                <FlexContainer margin="0 0 5px">
                                                    <Text title="Sinxron tarjima:" /><span className="yes_no">{data?.synchronous_translate ? "Ha":"Yo'q"}</span>
                                                </FlexContainer> 
                                        {/* } */}
                                        {/* {
                                            data?.written_translate ? */}
                                                <>
                                                    <Text title="Izchil tarjima:" /><span className="yes_no">{data?.written_translate ? "Ha":"Yo'q"}</span>
                                                </> 
                                        {/* } */}
                                    </Grid>
                                </Grid>
                            </FlexContainer>
                            <div class="box">
                                <Text title="Ekskursiyalar : " />
                                <div class="box_child">
                                    {
                                        data?.excursions?.filter((item)=>{if(item?.city && item?.country) return item})?.length > 0 ?
                                            data?.excursions?.map((prev, index) => (
                                                <span key={index}>{(prev?.city && prev?.country) && prev?.city[lan] + "-" + prev?.country[lan]}</span>
                                            )) : <div>Malumot kiritilmagan</div>
                                    }
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