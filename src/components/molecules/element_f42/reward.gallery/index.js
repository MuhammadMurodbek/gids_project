import React from 'react'
import { FlexContainer } from '../../../../styles/flex.container'
import {Wrapper} from './style'
import ImageContainer from '../../../molecules/img.container'
import { Grid } from '@material-ui/core'

const Index = () => {
    return (
        <Wrapper>
            <div style={{margin:"10px 0", fontWeight:'bold', fontSize:'15px'}}>Sertifikat va diplomlar</div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <ImageContainer width="100%" src="https://lppm.iainkendari.ac.id/wp-content/uploads/2020/05/Screenshot_20200514-062159-768x553.jpg"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ImageContainer width="100%" src="https://lppm.iainkendari.ac.id/wp-content/uploads/2020/05/Screenshot_20200514-062159-768x553.jpg"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ImageContainer width="100%" src="https://lppm.iainkendari.ac.id/wp-content/uploads/2020/05/Screenshot_20200514-062159-768x553.jpg"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ImageContainer width="100%" src="https://lppm.iainkendari.ac.id/wp-content/uploads/2020/05/Screenshot_20200514-062159-768x553.jpg"/>
                </Grid>
            </Grid>
        </Wrapper>
    )
}

export default Index
