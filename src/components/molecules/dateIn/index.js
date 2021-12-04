import React from 'react'
import { Wrapper } from './index.style'
import { Grid } from '@material-ui/core'
import Date from '../../atom/calendar'
import Select from '../../atom/select'
import SearchIcon from '@material-ui/icons/Search';
import { useTranslation } from 'react-i18next'
import Selection from "../../extended.search/select.with.requests"


export default function Index() {
    const { t } = useTranslation()
    return (
        <Wrapper>
            <Grid container justifyContent="center" spacing={1} direction="row" >
                <div >
                   <Selection className="select_div"/>
                </div>
                <div className="select_date">
                    <Date  placeholder="dd/mm/yyyy  dan " />
                </div>
                <div className="select_date">
                    <Date  placeholder="dd/mm/yyyy gacha " />
                </div>
                <div className="searchI">
                    <SearchIcon/>
                     
                </div>
            </Grid>
        </Wrapper>
    )
}
