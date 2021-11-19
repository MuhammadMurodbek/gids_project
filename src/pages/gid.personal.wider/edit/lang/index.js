import { Grid } from '@material-ui/core'
import React, {useState} from 'react'
import { Wrapper } from './style'
import TextLabeled from "../../../../components/molecules/input.labeled"
import Button from "../../../../components/atom/button"
import { FlexContainer } from '../../../../styles/flex.container'
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add'
import { Container } from '../../../../styles/container/index.style'
import SelectLabeled from "../../../../components/molecules/select.labeled"
import TextLabeledLoop from "../../../../components/atom/text.labeled"
import { useTranslation } from 'react-i18next'
import {postResponse} from "../../../../hooks/response_get"
import uuid from 'react-uuid'
import {selection} from "./_constants"
import toast from 'react-hot-toast'
const Index = () => {

    const {t} = useTranslation();
    console.log(uuid())
    const getRole = JSON.parse(localStorage.getItem("user_token"));
    const { role } = getRole;
    const [clearValue, setClearValue] = useState(false)
    const [value, setValue] = useState({id:'', name:'', level:''})
    const [postData,setPostData] = useState({success:'', error:'', loading: false})
    const [state, setState] = useState([]);
    const handleAdd = () => {
       setState([...state,{id:uuid(),name:value?.name, level:value?.level}])
       setValue({id:"",name:'', level:''})
       setClearValue(true)
    }
    const handleDelete = (index) => {
        console.log(index)
        let clone = state.filter(item => item !== index)
        setState(clone)
    }
    const handleSubmitGid = () => {
        setPostData({...postData, loading: true})
        let clone = state.map((item) =>{
            return{
                name:item?.name,
                level:item?.level?.value
            }
        })
        postResponse('/api/gids/edit/language/', clone, setPostData)
    }
    React.useEffect(() => {
        if(postData?.success !==''){
            toast.success("Successfully uploaded")
        }
        if(postData?.error !==''){
            toast.error("Failed to load")
        }
    },[postData])
    return (
        <Wrapper>
            <Container padding="10px 0">
                {role === "gid" ?
                    <>
                    {
                        state.map((item, index)=>(
                            <>
                                <Grid container spacing={1} key={index}>
                                    <Grid item xs={12} sm={6} md={6}>
                                        <TextLabeledLoop label={t("TillarniBilish.til")} value={item?.name}/>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={5}>
                                        <TextLabeledLoop label={t("TillarniBilish.bilishDarajasi")}  value={item?.level?.label}/>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={1}>
                                        <FlexContainer width="100%" alignItems="flex-end" margin="44px 0 0 0">
                                            <Button 
                                                paddingIcon="10px" 
                                                type="outlined" 
                                                margin="11px 10px 0 10px"
                                                onClick={()=>handleDelete(item)}
                                            >
                                                <DeleteIcon className="icon" />
                                            </Button>
                                        </FlexContainer>
                                    </Grid>
                                </Grid>
                            
                            </>
                        ))
                    }
                    
                    <Grid container spacing={1} >
                        <Grid item xs={12} sm={6} md={6}>
                            <TextLabeled 
                                value={value?.name}
                                state={value}
                                setState={setValue}
                                field="name"
                                sizeLabel="15px" width="100%" 
                                label={t("TillarniBilish.til")}
                                placeholder={t("TillarniBilish.tilPlace")} 
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={5}>
                            <SelectLabeled 
                                setClearValue={setClearValue}
                                clearValue={clearValue}
                                options={selection}
                                collect={value}
                                setCollect={setValue}
                                field="level"
                                sizeLabel="15px" 
                                width="100%" 
                                marginLabel="12px 0"
                                label={t("TillarniBilish.bilishDarajasi")} 
                                placeholder={t("TillarniBilish.BilishDPlace")} 
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={1}>
                            <FlexContainer width="100%" alignItems="flex-end" margin="46px 0 0 0">
                                <Button paddingIcon="10px" onClick={handleAdd}>
                                    <AddIcon className="icon" />
                                </Button>
                            </FlexContainer>
                        </Grid>
                    </Grid>
                    </>
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
                <Button loader={postData?.loading} onClick={handleSubmitGid}>{t("TillarniBilish.save")}</Button>
            </Container>

        </Wrapper>
    )
}

export default Index
