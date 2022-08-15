import React, { useState, useCallback, useEffect } from 'react'
import Select from "../../../../components/atom/select"
import SelectLabeled from "../../../../components/molecules/select.labeled"
import { TextTitle } from '../../../../styles/textTitle/index.style'
import Grid from '@mui/material/Grid';
import { Container } from "../../../../styles/container/index.style"
import InputLabeled from "../../../../components/molecules/input.labeled"
import Button from "../../../../components/atom/button"
import styled from "styled-components"
import AddIcon from '@material-ui/icons/Add'
import Box from '@mui/material/Box';
import { SelectValue, defaultListValue } from "./_const";
import { getResponse, putResponse } from "../../../../hooks/response_get"
import { common } from "../../../../custom/url"
import { toastChecker } from "../../../../custom/function"
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const Todos = ({ translateType, setTranslateType }) => {
    let arrayList = defaultListValue()
    let optionList = SelectValue()
    const { t } = useTranslation()
    const [items, setItems] = useState(arrayList)
    const [item, setItem] = useState({ name: '', level: '' })
    const [getData, setGetData] = useState({ success: '', error: '' })
    const getRole = JSON.parse(localStorage.getItem("user_token"));
    const [postApiData, setPostApiData] = useState({ success: '', error: '', loading: false })
    useEffect(() => { getResponse(common.personal.edit.services, setGetData) }, [])
    useEffect(() => {
        if (getRole.success !== '') {
            setTranslateType({ gender: getData?.success?.data?.translate_type })
            if (getData?.success?.data?.themes !== null) {
                let theme = getData?.success?.data?.themes?.map(prev => {
                    return {
                        name: prev.name,
                        level: {
                            value: prev.level,
                            label: optionList?.find(p => p.value === prev.level)?.label
                        }
                    }
                }) || []
                // console.log(theme)
                setItems(theme)
            } else
                setItems(arrayList)
        }
    }, [getData])
    const handleAdd = useCallback(() => {
        if (item?.name === '' || item?.level === '') {
            toast.error(t("kengaytirlgan_Q.toliqKiritilmagan"))
        } else {
            setItems([...items, item])
        }
    }, [item])
    useEffect(() => {
        if (item.hasOwnProperty("idK")) {
            let update = items.map(prev => {
                if (prev.name === item.idK) {
                    prev.level = item.level
                }
                return prev
            })
            setItems([...update])
        }
    }, [item])
    // console.log(arrayList)
    const handleSubmit = () => {
        setPostApiData({ ...postApiData, loading: true })
        let postData = {
            translate_type: translateType?.gender,
            themes: items.map((prev => {
                return {
                    ...prev,
                    level: prev?.level?.value
                }
            }))
        }
        // console.log(postData)
        putResponse(common.personal.edit.services, postData, setPostApiData)
    }
    useEffect(() => { toastChecker(postApiData) }, [postApiData])



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

    const itemsLable = (item) => {
        if (item === 'Mening mavzuim emas'|| item === "Не моя тематика") return t("Pismenniy_Xizmatlar.meningMavzuimEmas")
        else if (item === 'A’lo' || item === "Отлично") return t("Pismenniy_Xizmatlar.alo")
        else if (item === 'Yaxshi' || item === "Хорошо") return t("Pismenniy_Xizmatlar.yaxshi")
        else if (item === 'O’rta' || "Среднее") return t("Pismenniy_Xizmatlar.orta")
        else return item
    }



    return (
        <TodosWrapper>
            {
                getRole?.role === 'gid' ? null :
                    <>
                        <TextTitle font="15px" align="left" left="5px" color="#000000d9" bottom="-12px" top="35px" >
                            {t("Ustniy_Xizmatlar.tarjimaMavzulari")}
                        </TextTitle>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container columnSpacing={3} justifyContent="space-between" alignItems="center">
                                {
                                    items?.length > 0 ?
                                        items.map((prev, index) => (
                                            <Grid key={index} item xs={12} md={6}>
                                                <Grid container alignItems="center">
                                                    <Grid item xs={12} sm={6}>
                                                        <TextTitle font="16px" fontWeight="300" align="left" top="20px">
                                                            {itemsName(prev.name)}
                                                        </TextTitle>
                                                    </Grid>
                                                    <Grid item xs={12} sm={6}>
                                                        <SelectLabeled idK={prev.name} options={optionList} collect={item} setCollect={setItem} field="level" defaultApiValue={ itemsLable(prev?.level?.label)} width="100%" placeholder={t("xizmatlar.mavzuEmas")} />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        )) : null
                                }
                            </Grid>
                        </Box>
                        <Container padding="10px 0">
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container columnSpacing={3} alignItems="center" justifyContent="space-between">
                                    <Grid item xs={12} sm={10} md={6}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} sm={6} md={6} >
                                                <InputLabeled state={item} setState={setItem} field="name" width="100%" placeholder={t("xizmatlar.mavzuYozing")} />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                                <Select options={optionList} collect={item} setCollect={setItem} field="level" margin="24px 0 0 0" width="100%" placeholder={t("xizmatlar.mavzuEmas")} />
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid textAlign="right" item xs={12} sm={1} md={1}>
                                        <Button onClick={handleAdd} style={{ marginTop: 40, padding: 13 }} paddingIcons="15px">
                                            <AddIcon className="icon" />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Container>

                        <Container padding="10px 0" textAlign="right">
                            <Button loader={postApiData.loading} onClick={handleSubmit}>{t("xizmatlar.save")}</Button>
                        </Container>
                    </>
            }
        </TodosWrapper>
    )
}


export const TodosWrapper = styled.div`
    width: 100%;
    height: auto;
    
    .sc-idOiZg.DvRDO{
        position: relative;
        top:10px !important;
    }
`
export default Todos;