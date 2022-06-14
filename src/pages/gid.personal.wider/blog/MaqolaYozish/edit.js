import React, { useState } from 'react'
import { TitleComponent } from "./style"
import {useParams, useHistory} from "react-router-dom"
import Layout from "../../../../layouts/gid.personal.page"
import { TextTitle } from "../../../../styles/textTitle/index.style"
import icon from "../../../../assets/img/chev_right.png"
import ImageContainer from "../../../../components/molecules/img.container"
import { Link } from "react-router-dom"
import { Container } from "../../../../styles/container/index.style"
import { shadow } from "../../../../styles/global/colors"
import { Grid } from '@material-ui/core'
import InputLabel from "../../../../components/molecules/input.labeled"
import AreaLabeled from "../../../../components/molecules/area.labeled"
import ImageUploader from "../../../../components/organism/image.uploader.f15"
import Button from "../../../../components/atom/button"
import { mediaTextField, mediaTextFieldSec } from "../../../../custom/global.media.variables"
import { useTranslation } from 'react-i18next'
import Select from 'react-select';
import {putResponse, getResponse} from "../../../../hooks/response_get"
import toast from 'react-hot-toast'
import {colourOptions, colourOptionsApi} from "./contant"
import Spinner from "../../../../components/atom/loading.spinner.line"

const tags = ["busines", "tarix", "siyosiy"]

const Index = () => {
    const history = useHistory()
    const [postData, setPostData] = useState({success:'',error:'',loading:false})
    const [getData, setData] = useState({success:'',error:'', loading:false})
    const [article, setArticle] = useState({
        title: "",
        image: "",
        content: "",
        tags: null
    })
    const {id} = useParams()
  const {tags} = article
    const [upload, setUpload] = useState(null)
    const { t } = useTranslation()


    function handleChange(e) {
        setArticle(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }    
    function handleTagChange(tags) {
        setArticle({
            ...article,
              tags
        })
    }
    // console.log(tags)
    // console.log(upload)
    function handleSubmit(e) {
        e.preventDefault()
        setPostData({...postData,loading:true})
        try {
            let newArr = tags ? [...tags] : undefined
            let selectTags = newArr.map(item => item.label)
            // console.log(selectTags)
            const payload = {
                title: article.title,
                image: upload?.name,
                content: article.content,
                tags: selectTags
            }
            // console.log(payload)
            const formData = new FormData()
            if(payload?.image) formData.append('image', upload)
            formData.append('title', article.title)
            formData.append('content', article.content)
            formData.append('tags',selectTags)

            putResponse(`/api/posts/article/${id}/`, formData, setPostData)
        } catch (e) {
            // console.log(e)
        }
    }
    React.useEffect(() => {
        if(postData?.success!=='') toast.success('Successfully updated')
        if(postData?.error!=='') toast.error('Something went wrong')
    }, [postData])
    
    React.useEffect(()=>{getResponse(`/api/posts/article/${id}/`, setData)},[])
    React.useEffect(()=>{
        if(getData?.success!==''){
            setArticle(prev=>{return{
                ...prev,
                title:getData?.success?.data?.title,
                content:getData?.success?.data?.content,
                tags:getData?.success?.data?.tags?.map(item=>{return{label:item, value:colourOptionsApi[item]}}),
            }})
        }
    },[getData])
    return (
        <Layout>
            {
                getData?.success === '' ? <Spinner marginTop="60px" width={ 50 } height={ 50 } />:
                <form onSubmit={handleSubmit}>
                    <TitleComponent>
                        <TextTitle {...mediaTextField} {...mediaTextFieldSec} font="26px" bottom="20px">Maqolani o'zgartirish</TextTitle>
                        {/* <Link to="/gid-personal-wider?tab" className="link"> */}
                            <div style={{cursor:'pointer'}} onClick={()=>history.goBack()} className="title-left"> <ImageContainer width="auto" src={icon} /> <span>{t("maqolaYozish.orqaga")}</span>
                            </div>
                        {/* </Link> */}
                    </TitleComponent>
                    <Container boxShadow={shadow} padding="20px">
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4} >
                                <InputLabel
                                    name="title"
                                    value={article.title}
                                    onChange={handleChange}
                                    width="100%"
                                    label={t("maqolaYozish.maqolaNomi")}
                                    placeholder={t("maqolaYozish.NomiPlace")} 
                                    // defaultApiValue={getData?.success?.data?.title}
                                />
                                
                                <br /><br />
                                <h2>Tags</h2>
                                <Select
                                    // defaultValue = {[{ value: 'tag1', label: "#Biznes" }]}
                                    isMulti
                                    value={article.tags}
                                    name="tags"
                                    options={colourOptions}
                                    onChange={handleTagChange}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <ImageUploader
                                    upload={upload}
                                    setUpload={setUpload}
                                    width="100%"
                                    height="460px" 
                                    defaultImage={getData?.success?.data?.image}
                                />
                            </Grid>
                        </Grid>
                        <Container padding="0" margin="70px 0 0">
                            <AreaLabeled
                                name="content"
                                state={article}
                                setState={setArticle}
                                field="content"
                                width="100%"
                                label={t("maqolaYozish.Text")}
                                placeholder={t("maqolaYozish.maqolaniYozing")} 
                                style={{minHeight:400}}
                                />
                        </Container>
                        <Container padding="20px 0 0" textAlign="right">
                            <Button loader={postData?.loading} type="submit">{t("maqolaYozish.joylamoq")}</Button>
                        </Container>
                    </Container>
                </form>
            }
        </Layout>
    )
}

export default Index

// <AreaLabeled
// width="100%"
// label={t("maqolaYozish.taglar")}
// placeholder={t("maqolaYozish.tagPlace")} />