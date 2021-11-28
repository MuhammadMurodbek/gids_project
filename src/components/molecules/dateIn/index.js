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
                <div className="select_div">
                   <Selection/>
                </div>
                <div className="select_date">
                    <Date />
                </div>
                <div className="select_date">
                    <Date />
                </div>
                <div className="searchI">
                    <SearchIcon/>
                    <span>Qidiruv</span>
                </div>
            </Grid>
        </Wrapper>
    )
}
