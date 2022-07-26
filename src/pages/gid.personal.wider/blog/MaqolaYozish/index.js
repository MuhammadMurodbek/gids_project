import React, { useState } from 'react'
import { TitleComponent } from "./style"
import Layout from "../../../../layouts/gid.personal.page"
import { TextTitle } from "../../../../styles/textTitle/index.style"
import icon from "../../../../assets/img/chev_right.png"
import ImageContainer from "../../../../components/molecules/img.container"
import { Link } from "react-router-dom"
import './style.css'
import {useHistory} from "react-router-dom"
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
import { postResponse } from "../../../../hooks/response_get"
import toast from 'react-hot-toast'


const colourOptions = [
    {
        label: ' #Biznes',
        value: 'tag1'
    },
    {
        label: "#Sayoxat",
        value: "tag2"
    },
    // {
    //     label: "#Siyosiy",
    //     value: "tag3"
    // },
    // {
    //     label: "#Rasmiy",
    //     value: "tag4"
    // }
]

const tags = ["busines", "tarix", "siyosiy"]

const Index = () => {
    const [postData, setPostData] = useState({ success: '', error: '', loading: false })
    const [article, setArticle] = useState({
        title: "",
        image: "",
        content: "",
        tags: null
    })

    const { tags } = article
    const [upload, setUpload] = useState(null)
    const { t } = useTranslation()
    const history = useHistory()

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
        setPostData({ ...postData, loading: true })
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
            const formData = new FormData()
            formData.append('title', article.title)
            formData.append('image', upload)
            formData.append('content', article.content)
            formData.append('tags', selectTags)

            postResponse('/api/posts/article/', formData, setPostData)
        } catch (e) {
            // console.log(e)
        }
    }

    React.useEffect(() => {
        if (postData?.success !== '') toast.success('Successfully created')
        if (postData?.error !== '') toast.error('Something went wrong')
    }, [postData])
    // console.log(article)
    const handleBack = () => history.goBack()
    
    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <TitleComponent>
                    <TextTitle {...mediaTextField} {...mediaTextFieldSec} font="26px" bottom="20px">{t("safarHaqda.Maqolayozish")}</TextTitle>
                    <div className="link" style={{cursor:'pointer'}} onClick={handleBack}>
                        <div className="title-left"> <ImageContainer width="auto" src={icon} /> <span>{t("maqolaYozish.orqaga")}</span>
                        </div>
                    </div>
                </TitleComponent>
                <div className="divyozish">
                    <Container boxShadow={shadow} padding="20px">
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4} >
                                <InputLabel
                                    name="title"
                                    value={article.title}
                                    onChange={handleChange}
                                    width="100%"
                                    label={t("maqolaYozish.maqolaNomi")}
                                    placeholder={t("maqolaYozish.NomiPlace")} />

                                <br /><br />
                                <p className='paragref'>{t("maqolaYozish.taglar")}</p>
                                <Select
                                    defaultValue={[colourOptions[2], colourOptions[3]]}
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
                                    height="460px" />
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
                                style={{ minHeight: 400 }}
                            />
                        </Container>
                        <Container padding="20px 0 0" textAlign="right">
                            <Button loader={postData?.loading} type="submit">{t("maqolaYozish.joylamoq")}</Button>
                        </Container>
                    </Container>
                </div>
            </form>
        </Layout>
    )
}

export default Index

// <AreaLabeled
// width="100%"
// label={t("maqolaYozish.taglar")}
// placeholder={t("maqolaYozish.tagPlace")} />