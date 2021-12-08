import React from 'react'
import { Wrapper } from './index.style'
import { Grid } from '@material-ui/core'
import Date from '../../atom/calendar'
import SearchIcon from '@material-ui/icons/Search';
import { useTranslation } from 'react-i18next'
import Selection from "../../extended.search/select.with.requests"
import { useHistory } from 'react-router-dom'

export default function Index({setCollect, collect, setCallback, url}) {
    const history = useHistory()
    const { t } = useTranslation()
    const handleSubmit = () => {
        if(setCallback) setCallback(prev=>!prev)
        let checkerUrl = url ? url : 'gid-personal'
        history.push(`/${checkerUrl}/?country=${collect?.country}&city=${collect?.city}&date_after=${collect?.date_after}&date_before=${collect?.date_before}`)
    }
    return (
        <Wrapper>
            <Grid container justifyContent="center" alignItems="center" spacing={1} direction="row" >
                <div className="select_div">    
                    <Selection setState={setCollect} state={collect} />
                </div>
                <div className="select_date">
                    <Date field="date_after"
                        placeholder="dd/mm/yyyy  dan "
                        setState={setCollect} />
                </div>
                <div className="select_date">
                    <Date field="date_before"
                        placeholder="dd/mm/yyyy  dan "
                        setState={setCollect} />
                </div>
                <div className="searchI">
                    <button className="button_sub" onClick={handleSubmit}>
                        <SearchIcon />
                        Qidiruv
                    </button>
                </div>
            </Grid>
        </Wrapper>
    )
}
