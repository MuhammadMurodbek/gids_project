import React from 'react'
import { Wrapper } from './index.style'
import { Grid } from '@material-ui/core'
import Date from '../../atom/calendar'
import Select from '../../atom/select'
import SearchIcon from '@material-ui/icons/Search';

export default function index() {

    return (
        <Wrapper>
            <Grid container justifyContent="center" spacing={1} direction="row" >
                <div className="select_div">
                    <Select width="100%" placeholder="Shaharni kiriting" />
                </div>
                <div className="select_date"><Date/></div>
                <div className="select_date"><Date/></div>
                <div className="searchI">
                    <SearchIcon /> 
                    <span>Qidiruv</span>
                </div>
            </Grid>
        </Wrapper>
    )
}
