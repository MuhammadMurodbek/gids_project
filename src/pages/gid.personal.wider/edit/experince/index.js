import { Grid } from '@material-ui/core'
import React from 'react'
import { Wrapper } from './style'
import TextLabeled from "../../../../components/molecules/input.labeled"
import CalendarLabeled from "../../../../components/molecules/calendar.labeled"
import Button from "../../../../components/atom/button"
import { FlexContainer } from '../../../../styles/flex.container'
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add'
import { Container } from '../../../../styles/container/index.style'
import SelectLabeled from "../../../../components/molecules/select.labeled"
import DoubleTime from "../../../../components/molecules/double.time.labeled"
import {useTranslation} from 'react-i18next'

const Index = () => {
    
    const {t} = useTranslation()

    const getRole = JSON.parse(localStorage.getItem("user_token"));
    const { role } = getRole;

    const options_year = [
        { value: 1, label: "1 yil" },
        { value: 2, label: "2 yil" },
        { value: 3, label: "3 yil" },
        { value: 4, label: "5+ yil" },
        { value: 5, label: "10+ yil" },
    ]
    const options_yes = [
        { value: 1, label: "Ha" },
        { value: 2, label: "Yoq" }
    ]
    return (
        <Wrapper>

            {role === "gid" ?

                <Container padding="20px 0">
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={4}>
                            <SelectLabeled sizeLabel="15px" width="100%" 
                            label={t("IshTajriba.malumotlar")}
                            placeholder={t("IshTajriba.oliy")} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextLabeled sizeLabel="15px" width="100%"
                             label={t("IshTajriba.bitirgan")}
                             placeholder={t("IshTajriba.toifasi")} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <SelectLabeled sizeLabel="15px" width="100%"
                            label={t("IshTajriba.toifasi")} 
                            placeholder={t("IshTajriba.toifaPlace")} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}  >
                        <Grid xs={12} sm={6} md={10}>
                            <TextLabeled sizeLabel="15px" width="100%" 
                            label={t("IshTajriba.qoshimchaKurslar")} 
                            placeholder={t("IshTajriba.oqiganKurslaringiz")} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <SelectLabeled sizeLabel="15px" width="100%" label={t("IshTajriba.tajriba")} placeholder={t("IshTajriba.year")}
                                options={options_year} />
                        </Grid>
                    </Grid>
                </Container>
                :


                <>
                    <Container padding="10px 0">
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6} md={5}>
                                <TextLabeled sizeLabel="15px" width="100%" label="Bitigan instituti" placeholder="Bitirgan Oliy ta’lim mussasasini kiriting" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <CalendarLabeled sizeLabel="15px" width="100%" label="Bitirgan yili" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <TextLabeled sizeLabel="15px" width="100%" label="Mutaxassisligi" placeholder="Mutaxassisligizni yozing..." />
                            </Grid>
                            <Grid item xs={12} sm={6} md={1}>
                                <FlexContainer width="auto" flexDirection="column" gap="8px" margin="45px 0 0 auto" >
                                    <div style={{ marginLeft: "auto" }}>
                                        <Button paddingIcon="10px" type="outlined">
                                            <DeleteIcon className="icon" />
                                        </Button>
                                    </div>
                                </FlexContainer>
                            </Grid>
                        </Grid>
                        <Container width="100%" padding="10px 0px" textAlign="right"
                        >
                            <Button paddingIcon="10px"  ><AddIcon className="icon" /></Button>
                        </Container>
                    </Container>
                    <Container padding="10px 0">
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6} md={4}><TextLabeled sizeLabel="15px" width="100%" label="Ish joyingizni ko'rsating" placeholder="Text" /></Grid>
                            <Grid item xs={12} sm={6} md={4}><TextLabeled sizeLabel="15px" width="100%" label="Lavozimingiz" placeholder="Text" /></Grid>
                            <Grid item xs={12} sm={6} md={4}><DoubleTime sizeLabel="15px" width="100%" label="Siz hozir frilansirsiz?" /></Grid>
                        </Grid>
                    </Container>
                    <Container padding="10px 0">
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6} md={3}>
                                <SelectLabeled sizeLabel="15px" width="100%" label="Tajriba" placeholder="yil"
                                    options={options_year} />
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <SelectLabeled sizeLabel="15px" width="100%" label="Siz hozir frilansirsiz?" placeholder="none" options={options_yes} />
                            </Grid>
                        </Grid>
                    </Container>

                </>
            }

            <Container padding="10px" textAlign="right">
                <Button >{t("IshTajriba.saqlash")}</Button>
            </Container>
        </Wrapper>
    )
}

export default Index
