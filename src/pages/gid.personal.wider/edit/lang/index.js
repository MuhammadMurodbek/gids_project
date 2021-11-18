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
import { useTranslation } from 'react-i18next'
import uuid from 'react-uuid'
import {selection} from "./_constants"
const Index = () => {

    const {t} = useTranslation();
    console.log(uuid())
    const getRole = JSON.parse(localStorage.getItem("user_token"));
    const { role } = getRole;
    const [value, setValue] = useState({id:'', name:'', level:''})
    const [state, setState] = useState([]);
    const handleAdd = () => {
       setState([...state,{id:uuid(),name:value?.name, level:value?.level}])
       setValue({id:'',name:'', level:''})
    }
    const handleDelete = (index) => {
        console.log(index)
        let clone = state.filter(item => item !== index)
        setState(clone)
    }
    console.log(value)
    function handleChange(data,id){
        // console.log(data,id,type)
        let clone_id = state.findIndex(item=>item.id === id)
        let clone = state
        clone[clone_id].name=data
        setState(clone)
    }

    return (
        <Wrapper>
            <Container padding="10px 0">
                {role === "gid" ?
                    <>
                    {
                        state.map((item, index)=>(
                            <Grid container spacing={1} key={index}>
                                <Grid item xs={12} sm={6} md={6}>
                                    <TextLabeled 
                                        value={item?.name}
                                        onChange={(e)=>handleChange(e.target.value, item.id)}
                                        sizeLabel="15px" width="100%" 
                                        label={t("TillarniBilish.til")}
                                        placeholder={t("TillarniBilish.tilPlace")} 
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={5}>
                                    <SelectLabeled 
                                        
                                        sizeLabel="15px" 
                                        width="100%" 
                                        marginLabel="12px 0"
                                        label={t("TillarniBilish.bilishDarajasi")} 
                                        placeholder={t("TillarniBilish.BilishDPlace")} 
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={1}>
                                    <FlexContainer width="100%" alignItems="flex-end" margin="44px 0 0 0">
                                        <Button 
                                            paddingIcon="10px" 
                                            type="outlined" 
                                            margin="11px 10px 0 auto"
                                            onClick={()=>handleDelete(item)}
                                        >
                                            <DeleteIcon className="icon" />
                                        </Button>
                                    </FlexContainer>
                                </Grid>
                            </Grid>
                        ))
                    }
                    <Grid container spacing={1} >
                        <Grid item xs={12} sm={6} md={6}>
                            <TextLabeled 
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
                <Button>{t("TillarniBilish.save")}</Button>
            </Container>

        </Wrapper>
    )
}

export default Index
