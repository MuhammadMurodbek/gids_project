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
        no: 'Mening mavzuim emas',
        great: "A'lo",
        good: "Yaxshi",
        low: 'Quyi',
    }

    console.log(uniq_fast(data?.excursions))
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
                                text={<span>&nbsp;{data?.can_oral_translate ? 'Ha (Sinxron)' : "Yo'q"}&nbsp;
                                </span>} />
                            <br />
                            <Text title={t("Pismenniy_Xizmatlar.shoshilikch")} text={<span>&nbsp;{data?.express_order ? 'Ha' : "Yo'q"}&nbsp;</span>} /> 
                            <br />
                            <Text title={t("Pismenniy_Xizmatlar.damolish")} text={<span>&nbsp;{data?.weekend_order ? 'Ha' : "Yo'q"}&nbsp;</span>} /> 
                            <br />
                            <Text title={t("Pismenniy_Xizmatlar.tahrirlash2")} text={<span>&nbsp;{data?.edit_text ? 'Ha' : "Yo'q"}&nbsp;</span>} />
                             <br />
                            <Text title={t("Pismenniy_Xizmatlar.internet")} text={<span>&nbsp;{data?.always_online ? 'Ha' : "Yo'q"}&nbsp;
                            </span>} /> 
                            <br />
                            <Text title={t("Pismenniy_Xizmatlar.katta")} text={<span>&nbsp;{data?.always_online ? 'Ha' : "Yo'q"}&nbsp;</span>} /> 
                            <br />
                            <Text title={t("Pismenniy_Xizmatlar.cat")} text={data?.cat_programmes?.length > 0 ? data?.cat_programmes?.map(a => <span style={{ textTransform: 'capitalize' }}>{" " + a + ","}</span>) : t("GidPk.malumotKiritilmagan")} />

                            {data?.themes?.length > 0 && <div style={{ marginTop: 10 }}> <Text title="Mavzular:" /></div>}

                            <div className='mavzulardd'>
                                {
                                    data?.themes?.map((prev, index) => (
                                        <Text key={index} display="block" text={<><TextSpan>{prev?.name}</TextSpan> - <TextSpan style={{ fontWeight: '400' }}>{obj[prev?.level]}</TextSpan></>} />
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
                                <Text key={index} display="block" text={<><TextSpan>{prev?.name}</TextSpan> - <TextSpan style={{ fontWeight: '400' }}>{obj[prev?.level]}</TextSpan></>} />
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

                                        <FlexContainer justifyContent="flex-start" margin="0 0 5px">
                                            <Text title={t("GidPk.ekskursiyalar")} />
                                            <span className="yes_no">{data?.excursions?.length > 0 ? "Ha" : "Yo'q"}</span>
                                        </FlexContainer>

                                        <FlexContainer margin="0 0 5px">
                                            <Text title={t("GidPk.ogzaki")}/>
                                            <span className="yes_no">
                                                {data?.consecutive_translate ? "Ha" : "Yo'q"}
                                            </span>
                                        </FlexContainer>

                                        {data?.consecutive_translate &&
                                            <>
                                                <FlexContainer margin="0 0 5px">
                                                    <Text title={t("GidPk.sinxron")} /><span className="yes_no">{data?.synchronous_translate ? "Ha" : "Yo'q"}</span>
                                                </FlexContainer>
                                                <>
                                                    <Text title={t("GidPk.izchil")} /><span className="yes_no">{data?.written_translate ? "Ha" : "Yo'q"}</span>
                                                </>
                                            </>
                                        }
                                    </Grid>
                                </Grid>
                            </FlexContainer>
                            <div class="box">
                                <div class="box_child">
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