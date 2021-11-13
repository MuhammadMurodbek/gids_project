import React from 'react'
import { Wrapper } from './style'
import { Container } from "../../../../../styles/container/index.style"
import { TextTitle } from "../../../../../styles/textTitle/index.style"
import DoubleCheck from "../../../../../components/molecules/double.check"
import { FlexContainer } from '../../../../../styles/flex.container'
import { Grid } from '@mui/material'
import SelectLabeled from "../../../../../components/molecules/select.labeled"
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add'
import Button from "../../../../../components/atom/button"
import {useTrnslation} from 'react-i18next';
import { useTranslation } from 'react-i18next'

const GidIndex = () => {

    const {t} = useTranslation() 

    return (
        <Wrapper>
            <Container margin="30px 0 0" padding="10px 0">
                <TextTitle font="15px" align="left">{t("xizmatlar.xizmatlar")}</TextTitle>
                <FlexContainer width="100%" gap="50px">
                    <DoubleCheck flexDirection="column" 
                    name1={t("xizmatlar.ekskursiyalar")} 
                    name2={t("xizmatlar.ogzaki")} />
                    <DoubleCheck flexDirection="column" 
                    name1={t("xizmatlar.sinxron")} 
                    name2={t("xizmatlar.izchil")} 
                     />
                </FlexContainer>
                <Container padding="10px 0" margin="10px 0" textAlign="right">
                    <Grid container spacing={1}>
                        <Grid item xs={10} sm={10} md={11}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={6}>
                                    <SelectLabeled marginLabel=" 0" sizeLabel="15px"
                                     label={t("xizmatlar.mamalakatlargaEkskurs")}
                                     placeholder={t("xizmatlar.mamlakatPlace")} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                    <SelectLabeled marginLabel=" 0" sizeLabel="15px" label={t("xizmatlar.shaharlar")}
                                    placeholder={t("xizmatlar.shaharlarSelect")} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2} sm={2} md={1}>
                            <Button type="outlined" paddingIcon="10px" margin="30px">
                                <DeleteIcon className="icon" />
                            </Button>
                        </Grid>
                    </Grid>
                    <Button paddingIcon="10px" margin="-2px">
                        <AddIcon className="icon" />
                    </Button>

                </Container>
                <Container padding="10px 0" margin="20px 0" textAlign="right">
                    <Button>{t("xizmatlar.save")}</Button>
                </Container>
            </Container>
        </Wrapper>
    )
}

export default GidIndex
