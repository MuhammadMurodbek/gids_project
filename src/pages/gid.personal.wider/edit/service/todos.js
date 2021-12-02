import React, {useState, useCallback} from 'react'
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
import {selectValue} from "./_const"
import toast from 'react-hot-toast';
const Todos = () => {
    const [items, setItems] = useState([])
    const [item, setItem] = useState({name:'', level:''})
    const getRole = JSON.parse(localStorage.getItem("user_token"));
    const handleAdd = useCallback(() => {
        if(item?.name ==='' || item?.level === ''){
            toast.error("Ma'lumotlarni to'liq kiriting")
        }else{
            setItems([...items, item])
        }
    },[item])
    console.log(items)
    return (
        <TodosWrapper>
             {
                getRole?.role === 'gid'?  null:
             
            <>
                <TextTitle font="15px" align="left" left="5px" color="#000000d9" bottom="-12px" top="35px" >
                    Tarjima mavzulari
                </TextTitle>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container columnSpacing={3} justifyContent="space-between" alignItems="center">
                       {
                           items?.length>0 ?
                           items.map((prev, index)=>(
                            <Grid key={index} item xs={12} md={6}>
                                <Grid container alignItems="center">
                                    <Grid item xs={12} sm={6}>
                                        <TextTitle font="16px" fontWeight="300" align="left" top="20px">{prev.name}</TextTitle>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <SelectLabeled options={selectValue} defaultApiValue={prev?.level?.label} width="100%" placeholder="Mavzuyim emas.." />
                                    </Grid>
                                </Grid>
                            </Grid>
                           )):null
                       }
                    </Grid>
                </Box>
                <Container padding="10px 0">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container columnSpacing={3} alignItems="center" justifyContent="space-between">
                            <Grid item xs={12} sm={6}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} sm={6}>
                                        <InputLabeled state={item} setState={setItem} field="name" width="100%" placeholder="Text..." />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Select options={selectValue} collect={item} setCollect={setItem} field="level" margin="24px 0 0 0" width="100%" placeholder="Mavzuyim emas.." />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid textAlign="right" item xs={12} sm={1}>
                                <Button onClick={handleAdd} style={{ marginTop: 40, padding: 13 }} paddingIcons="15px">
                                    <AddIcon className="icon" />
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>

                <Container padding="10px 0" textAlign="right">
                    <Button>Saqlash</Button>
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
export default Todos