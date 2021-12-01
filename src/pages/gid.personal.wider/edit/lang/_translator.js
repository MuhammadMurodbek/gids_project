import React, {useState, useEffect, useCallback} from 'react'
import {Grid} from '@material-ui/core'
import Button from "../../../../components/atom/button"
import TextLabeledLoop from "../../../../components/atom/text.labeled"
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete';
import TextLabeled from "../../../../components/molecules/input.labeled"
import { FlexContainer } from '../../../../styles/flex.container'
import {deleteResponse, postResponse} from '../../../../hooks/response_get'
import { Container } from '../../../../styles/container/index.style'
import {common} from "../../../../custom/url"
import { useTranslation } from 'react-i18next'
import {toast} from "react-hot-toast"
const Translator = ({getData, spinner, setCallback}) => {
    const {t} = useTranslation()
    const [items, setItems] = useState([])
    const [clear, setClear] = useState(false)
    const [item, setItem] = useState({from_language:'', to_language:''})
    const [postData, setPostData] = useState({success: '', error: '', loading:false})
    const handleChange = useCallback(() => {
        setItems([...items, {from_language:item.from_language, to_language:item.to_language, id:'added'}])
        setClear(true)
        setItem({from_language:'', to_language:''})
    },[item])
    const handleDelete = (item) => {
        if(item.id === 'added'){
            let data = items.filter(prev=>prev!==item)
            setItems(data)
        }else{
            deleteResponse(`${common.personal.edit.language}${item?.id}/`, item?.name, setCallback)
        }
    }

    const handleSubmit = () => {
        setPostData({...postData, loading: true})
        let itemPost = items.filter(prev=>prev.id === 'added')
        postResponse(common.personal.edit.language, itemPost, setPostData)
    }
    useEffect(() => {setItems(getData?.success?.data)},[getData])
    useEffect(()=>{
        if(postData?.success !== '') toast.success("Successfully updated")
        if(postData?.error !== '') toast.success("Something went wrong")
    },[postData])
    return (
        <div>
            {
                getData?.success==='' ? spinner: <>
                {
                    items?.map((item, index) =>(
                     <Grid key={index} container spacing={1} justifyContent="space-between">
                         <Grid item xs={12} sm={6} md={6}>
                             <TextLabeledLoop value={item.from_language} label="Siz qaysi tildan tarjima qilasiz?" />
                         </Grid>
                         <Grid item xs={12} sm={6} md={5}>
                             <TextLabeledLoop value={item.to_language} label="Siz qaysi tilga tarjima qilasiz?"  />
                         </Grid>
                         <Grid item xs={12} sm={6} md={1}>
                             <FlexContainer width="100%" flexDirection="column" gap="4px" margin="46px 0 0 0 ">
                                 <Button onClick={()=>handleDelete(item)} paddingIcon="10px">
                                     <DeleteIcon className="icon" />
                                 </Button>
                             </FlexContainer>
                         </Grid>
                     </Grid>
                    ))
                }
                 
     
                 <Grid container spacing={1} justifyContent="space-between">
                     <Grid item xs={12} sm={6} md={6}>
                         <TextLabeled state={item} setState={setItem} clear={clear} setClear={setClear} field="from_language" sizeLabel="15px" width="100%" label="Siz qaysi tildan tarjima qilasiz?" placeholder="Text kiriting..." />
                     </Grid>
                     <Grid item xs={12} sm={6} md={5}>
                         <TextLabeled state={item} setState={setItem} clear={clear} setClear={setClear} field="to_language" sizeLabel="15px" width="100%" label="Siz qaysi tilga tarjima qilasiz?" placeholder="Text kiriting..." />
                     </Grid>
                     <Grid item xs={12} sm={6} md={1}>
                         <FlexContainer width="100%" flexDirection="column" gap="4px" margin="46px 0 0 0 ">
                             <Button onClick={handleChange} paddingIcon="10px">
                                 <AddIcon className="icon" />
                             </Button>
                         </FlexContainer>
                     </Grid>
                 </Grid>
                 <Container padding="10px 0" margin="10px 0 0 -30px" textAlign="right">
                     <Button loader={postData?.loading} onClick={handleSubmit}>{t("TillarniBilish.save")}</Button>
                 </Container>
                 </>
            }
           
        </div>
    )
}

export default Translator
