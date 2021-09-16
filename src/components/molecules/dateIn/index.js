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
                <Select width="250px" />
                <Date/>
                <Date/>
                <div className="searchI">
                    <SearchIcon />
                </div>
            </Grid>
        </Wrapper>
    )
}
