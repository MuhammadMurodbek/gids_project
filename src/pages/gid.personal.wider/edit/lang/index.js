import { Grid } from '@material-ui/core'
import React from 'react'
import { Wrapper } from './style'
import TextLabeled from "../../../../components/molecules/input.labeled"
// import CalendarLabeled from "../../../../components/molecules/calendar.labeled"
import Button from "../../../../components/atom/button"
import { FlexContainer } from '../../../../styles/flex.container'
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add'
import { Container } from '../../../../styles/container/index.style'
import SelectLabeled from "../../../../components/molecules/select.labeled"
import { useTranslation } from 'react-i18next'

// import SelectLabeled from "../../../../components/molecules/select.labeled"
// import DoubleTime from "../../../../components/molecules/double.time.labeled"
const Index = () => {

    const {t} = useTranslation();

    const getRole = JSON.parse(localStorage.getItem("user_token"));
    const { role } = getRole;

    return (
        <Wrapper>
            <Container padding="10px 0">
                {role === "gid" ?
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextLabeled sizeLabel="15px" width="100%" 
                            label={t("TillarniBilish.til")}
                            placeholder={t("TillarniBilish.tilPlace")} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={5}>
                            <SelectLabeled sizeLabel="15px" width="100%" 
                            label={t("TillarniBilish.bilishDarajasi")} 
                            placeholder={t("TillarniBilish.BilishDPlace")} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={1}>
                            <FlexContainer width="100%" flexDirection="column" gap="4px" margin="45px 0 0 0 ">
                                <Button paddingIcon="10px" type="outlined">
                                    <DeleteIcon className="icon" />
                                </Button>
                                <Button paddingIcon="10px">
                                    <AddIcon className="icon" />
                                </Button>
                            </FlexContainer>
                        </Grid>
                    </Grid>
                    :
                    <Grid container spacing={1} justifyContent="space-between">
                        <Grid item xs={12} sm={6} md={6}>
                            <TextLabeled sizeLabel="15px" width="100%" label="Siz qaysi tildan tarjima qilasiz?" placeholder="Text kiriting..." />
                        </Grid>
                        <Grid item xs={12} sm={6} md={5}>
                            <TextLabeled sizeLabel="15px" width="100%" label="Siz qaysi tilga tarjima qilasiz?" placeholder="Text kiriting..." />
                        </Grid>
                        <Grid item xs={12} sm={6} md={1}>
                            <FlexContainer width="100%" flexDirection="column" gap="4px" margin="45px 0 0 0 ">
                                <Button paddingIcon="10px" type="outlined">
                                    <DeleteIcon className="icon" /> </Button>
                                <Button paddingIcon="10px">
                                    <AddIcon className="icon" />
                                </Button>
                            </FlexContainer>
                        </Grid>
                    </Grid>
                }
            </Container>

            <Container padding="10px 0" margin="10px 0 0 -30px" textAlign="right">
                <Button>{t("TillarniBilish.save")}</Button>
            </Container>

        </Wrapper>
    )
}

export default Index
