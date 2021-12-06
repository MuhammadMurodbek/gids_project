import React from 'react'
import { Wrapper } from './index.style'
import { Grid } from '@material-ui/core'
import Date from '../../atom/calendar'
import Select from '../../atom/select'
import SearchIcon from '@material-ui/icons/Search';
import { useTranslation } from 'react-i18next'
import Selection from "../../extended.search/select.with.requests"


export default function Index({setCollect, collect, setCallback}) {

    const { t } = useTranslation()
    // console.log(collect)
    return (
        <Wrapper>
            <Grid container justifyContent="center" alignItems="center" spacing={1} direction="row" >
                <div className="select_div">
                   <Selection setState={setCollect} state={ collect }/>
                </div>
                <div className="select_date">
                    <Date field="date_after" setState={setCollect} />
                </div>
                <div className="select_date">
                    <Date field="date_before" setState={setCollect} />
                </div>
                <div className="searchI">
                    <button className="button_sub" onClick={() => setCallback(prev=>!prev)}>
                        <SearchIcon/>
                        Qidiruv
                    </button>
                </div>
            </Grid>
        </Wrapper>
    )
}
