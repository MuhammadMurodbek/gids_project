import React, { useEffect, useState } from 'react';
import { Wrapper } from './style';
import { Container } from "../../../../../styles/container/index.style"
import PriceCurrency from "./price.currency"
import { Grid } from '@mui/material';
import { getResponse, postResponse } from "../../../../../hooks/response_get"
import { common } from "../../../../../custom/url"
import TextLabeledLoop from "../../../../../components/atom/text.labeled"
import Button from "../../../../../components/atom/button"
import Spinner from "../../../../../components/atom/loading.spinner.line";
import { getLabelLangLocal, toastChecker } from "../../../../../custom/function"
import { useDispatch } from "react-redux";
import { saveTabAction } from "../../../../../redux/actions"
const Index = () => {
    const dispatch = useDispatch()
    const [dataItems, setdataItems] = useState({ success: '', error: '' })
    const [items, setItems] = useState([])
    const [post, setPost] = useState({ success: '', error: '', loading: false })
    const [item, setItem] = useState({})
    useEffect(() => { getResponse(common.personal.edit.cost, setdataItems) }, [])
    useEffect(() => {
        if (dataItems.success !== '') {
            setItems(dataItems?.success?.data)
            // setPostCollect(dataItems?.success?.data?.map(a=>{return{id:a.id}}))
        }
    }, [dataItems])
    useEffect(() => {
        if (item.hasOwnProperty('idK')) {
            items[item.idK - 1] = { ...items[item.idK - 1], ...item }
            setItems(items)
        }
     }, [item])
    const handleChangeInput = (value, field, index) => {
        items[index - 1][field] = value
        setItems(items)
    }
    const handleSubmit = () => {
         
        setPost({ ...post, loading: true })
        let clone = items.map(prev => {
            return {
                id: prev.id,
                cost_per_page_with: parseFloat(prev?.cost_per_page_with),
                currency_per_page_with: prev.currency_per_page_with?.value || prev.currency_per_page_with,
                cost_per_page_without: parseFloat(prev?.cost_per_page_without),
                currency_per_page_without: prev.currency_per_page_without?.value || prev.currency_per_page_without
            }
        })
        postResponse(common.personal.edit.cost, clone, setPost)
    }
    useEffect(() => {
        toastChecker(post)
        if (post?.success !== '') dispatch(saveTabAction(6))
    }, [post]
    )
      
    return (
        <Wrapper>
            {
                dataItems?.success === ''
                    ?
                    <div>
                        <Spinner marginTop="60px" width={50} height={50} />
                    </div>
                    :
                    items?.map((prev, index) => (
                        <Container key={index}>
                            <Grid container spacing={1} justifyContent="space-between" alignItems="center">
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <TextLabeledLoop
                                        label="Tillar"
                                        value={(getLabelLangLocal(prev?.from_language) + "->" + getLabelLangLocal(prev?.to_language) || null)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <PriceCurrency
                                        setState={setItem}
                                        handleChangeInput={handleChangeInput}
                                        state={prev}
                                        idK={index + 1}
                                        fieldS='currency_per_page_with'
                                        fieldIn="cost_per_page_with"
                                        title="1 bet uchun - bo'shliqlar bilan 1800 belgi"
                                        defValueCurrency={prev?.currency_per_page_with}
                                        defValueCost={prev?.cost_per_page_with}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <PriceCurrency
                                        setState={setItem}
                                        handleChangeInput={handleChangeInput}
                                        state={prev}
                                        idK={index + 1}
                                        fieldS='currency_per_page_without'
                                        fieldIn="cost_per_page_without"
                                        title="1 bet uchun - 1800 belgi bo'sh joysiz"
                                        defValueCurrency={prev?.currency_per_page_without}
                                        defValueCost={prev?.cost_per_page_without}
                                    />
                                </Grid>

                            </Grid>

                        </Container>
                    ))

            }

            {
                items.length === 0
                ? 
                 <div className='text1'> 
                    Narxlarni kiritish uchun tillarni bilish bo'limini to'ldiring
                 </div>
                :
                <Container width="100%" padding="10px 20px" margin="20px 0 0 0" textAlign="right">
                    <Button loader={post?.loading} onClick={handleSubmit}>Saqlash</Button>
                </Container>
            }


        </Wrapper>
    )
}

export default Index
