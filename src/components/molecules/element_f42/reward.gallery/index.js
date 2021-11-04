import React from 'react'
import { FlexContainer } from '../../../../styles/flex.container'
import {Wrapper} from './style'
import ImageContainer from '../../../molecules/img.container'
import { Grid } from '@material-ui/core'
import img01 from '../../../../assets/img/sertificet/12.png'
import img02 from '../../../../assets/img/sertificet/13.png'
import img03 from '../../../../assets/img/sertificet/14.png'
import img04 from '../../../../assets/img/sertificet/15.png'

const Index = () => {
    return (
        <Wrapper>
            <div style={{margin:"10px 0", fontWeight:'bold', fontSize:'15px'}}>Sertifikat va diplomlar</div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <ImageContainer width="100%" src={img04} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ImageContainer width="100%" src={ img01} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ImageContainer width="100%" src={img02} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ImageContainer width="100%" src={img03} />
                </Grid>
            </Grid>
        </Wrapper>
    )
}

export default Index
