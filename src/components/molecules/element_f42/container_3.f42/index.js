import React from 'react'
import { Wrapper } from "./style"
import Title from "../../../atom/element_f42/title.container.f42"
import Text from "../../../atom/element_f42/text.container.f42"
import { FlexContainer } from "../../../../styles/flex.container"
// import cheked from '../../../../assets/img/boglanish/cheked.svg'
import { Grid } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
// import { getLabelCountrySecond, getLabelCity } from "../../../../custom/function"
import { TextSpan } from "./style"



const Index = ({ data, role }) => {
    const { t } = useTranslation()
    const lan = localStorage.getItem("i18nextLng")
    // const getRole = JSON.parse(localStorage.getItem("user_token"))
    const obj = {
        no: t("Pismenniy_Xizmatlar.meningMavzuimEmas"),
        great: t("Pismenniy_Xizmatlar.alo"),
        good: t("Pismenniy_Xizmatlar.yaxshi"),
        low: t("Pismenniy_Xizmatlar.orta"),
    }


    function uniq_fast(a) {
        var seen = {};
        var out = [];
        var len = a?.length;
        var j = 0;
        for (var i = 0; i < len; i++) {
            var item = a[i];
            if (seen[item] !== 1) {
                seen[item] = 1;
                out[j++] = item;
            }
        }
        return out;
    }

    const itemsName = (item) => {

        if (item === 'Umumiy mavzular') return t("tematika.umumiyM")
        else if (item === 'Jamiyat va siyosat') return t("tematika.jamiyatS")
        else if (item === 'Iqtisodiyot va moliya') return t("tematika.IqtisodiyotM")
        else if (item === 'Huquqshunoslik') return t("tematika.Huquq")
        else if (item === 'Axborot texnologiyalari') return t("tematika.AxborotT")
        else if (item === 'Reklama va marketing') return t("tematika.reklamaM")
        else if (item === 'Sanoat va texnologiya') return t("tematika.sanoatT")
        else if (item === 'Neft va gaz') return t("tematika.NeftvaG")
        else if (item === 'Ilmiy va texnik adabiyotlar') return t("tematika.IlmiyvaTex")
        else if (item === 'Badiiy adabiyot') return t("tematika.badiyAdabiyot")
        else if (item === 'Tibbiyot va farmatsevtika') return t("tematika.tibiyotF")
        else return item
    }


    return (
        <Wrapper>
            <Title text={t("GidPk.hizmatlar")} />

            {
                role === 'writer' ?

                    (
                        <>
                            <Text title={t("Pismenniy_Xizmatlar.birkunlik")} text={<TextSpan style={{ fontWeight: '400' }}>&nbsp;{data?.daily_workload}&nbsp;<span style={{ textTransform: 'lowercase' }}>{t("Pismenniy_Xizmatlar.belgi")}</span>
                            </TextSpan>} />
                            <br />
                            <Text title={t("Pismenniy_Xizmatlar.ogzakit")}
                                text={<span>&nbsp;{data?.can_oral_translate ? t("Pismenniy_Xizmatlar.haS") : t("Pismenniy_Xizmatlar.yoq")}&nbsp;</span>} />
                            <br />
                            <Text title={t("Pismenniy_Xizmatlar.shoshilikch")} text={<span>&nbsp;{data?.express_order ? t("Pismenniy_Xizmatlar.ha") : t("Pismenniy_Xizmatlar.yoq")}&nbsp;</span>} />
                            <br />
                            <Text title={t("Pismenniy_Xizmatlar.damolish")} text={<span>&nbsp;{data?.weekend_order ? t("Pismenniy_Xizmatlar.ha") : t("Pismenniy_Xizmatlar.yoq")}&nbsp;</span>} />
                            <br />
                            <Text title={t("Pismenniy_Xizmatlar.tahrirlash2")} text={<span>&nbsp;{data?.edit_text ? t("Pismenniy_Xizmatlar.ha") : t("Pismenniy_Xizmatlar.yoq")}&nbsp;</span>} />
                            <br />
                            <Text title={t("Pismenniy_Xizmatlar.internet")} text={<span>&nbsp;{data?.always_online ? t("Pismenniy_Xizmatlar.ha") : t("Pismenniy_Xizmatlar.yoq")}&nbsp;
                            </span>} />
                            <br />
                            <Text title={t("Pismenniy_Xizmatlar.katta")} text={<span>&nbsp;{data?.always_online ? t("Pismenniy_Xizmatlar.ha") : t("Pismenniy_Xizmatlar.yoq")}&nbsp;</span>} />
                            <br />
                            <Text title={t("Pismenniy_Xizmatlar.cat")} text={data?.cat_programmes?.length > 0 ? data?.cat_programmes?.map(a => <span style={{ textTransform: 'capitalize' }}>{" " + a + ","}</span>) : t("GidPk.malumotKiritilmagan")} />

                            {data?.themes?.length > 0 && <div style={{ marginTop: 10 }}> <Text title={t("GidPk.mavzular")} /></div>}

                            <div className='mavzulardd'>
                                {
                                    data?.themes?.map((prev, index) => (
                                        <Text key={index} display="block" text={<>
                                            <TextSpan>
                                                {itemsName(prev?.name)}
                                            </TextSpan>  <TextSpan style={{ fontWeight: '400' }}>
                                                {obj[prev?.level]}</TextSpan></>} />
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
                        <Text title={t("GidPk.mavzular")} />
                        {
                            data?.themes?.map((prev, index) => (
                                <Text key={index} display="block" text={<>
                                    <TextSpan>
                                        {itemsName(prev?.name)}
                                    </TextSpan> - <TextSpan style={{ fontWeight: '400' }}>{obj[prev?.level]}</TextSpan></>} />
                            ))
                        }
                    </>)
                    : null
            }

            {
                role === 'gid' ?
                    (
                        <>


                            <FlexContainer width="70%" margin="15px 0" className='PkService'>
                                <Grid container spacing={1} className="gridCon">
                                    <Grid item md={12} className="as">

                                        <FlexContainer justifyContent="flex-start" margin="0 0 5px">
                                            <Text title={t("GidPk.ekskursiyalar")} />
                                            <span className="yes_no">{data?.excursions?.length > 0 ? t("Pismenniy_Xizmatlar.ha") : t("Pismenniy_Xizmatlar.yoq")}</span>
                                        </FlexContainer>

                                        <FlexContainer margin="0 0 5px">
                                            <Text title={t("GidPk.yozmaTarjima")} />
                                            <span className="yes_no">
                                                {data?.consecutive_translate ? t("Pismenniy_Xizmatlar.ha") : t("Pismenniy_Xizmatlar.yoq")}
                                            </span>
                                        </FlexContainer>

                                        {data?.consecutive_translate &&
                                            <>
                                                <FlexContainer margin="0 0 5px">
                                                    <Text title={t("GidPk.sinxron")} /><span className="yes_no">{data?.synchronous_translate ? t("Pismenniy_Xizmatlar.ha") : t("Pismenniy_Xizmatlar.yoq")}</span>
                                                </FlexContainer>
                                                <>
                                                    <Text title={t("GidPk.izchil")} /><span className="yes_no">{data?.written_translate ? t("Pismenniy_Xizmatlar.ha") : t("Pismenniy_Xizmatlar.yoq")}</span>
                                                </>
                                            </>
                                        }
                                    </Grid>
                                </Grid>
                            </FlexContainer>
                            <div class="box">
                                <div class="box_child">
                                    <span><b>{t("GidPk.shaharlar")}</b></span>
                                    {
                                        data?.excursions?.length ?
                                            data?.excursions?.map((item) => (
                                                <span key={item?.id}>{item?.country[lan] + "-" + item?.city[lan]}</span>
                                            )) : null
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