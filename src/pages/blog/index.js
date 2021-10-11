import React from 'react'
import { TextTitle } from '../../styles/textTitle/index.style'
import { Wrapper } from './style'
import { Grid } from '@material-ui/core'
import CitiLeftPart from '../../components/organism/citiesLeftPart'
import ad from '../../assets/img/citiyes/ad.png'
import xitoy from '../../assets/img/citiyes/xitoy.png';
import ImgContainer from "../../components/molecules/img.container"


export default function Index() {
    return (
        <Wrapper>
            <TextTitle width="50%" left="auto" right="auto" bottom="70px" top="70px">
                Blog
            </TextTitle>

            <Grid container spacing={1} >
                <Grid item xs={12} sm={12} md={8}>

                    <CitiLeftPart
                        title="Xitoyga sayoxat"
                        kalendar="23.01.2021"
                        hteg="Biznes, Xitoy"
                        url={xitoy}
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tristique volutpat commodo, sed risus, vitae. Habitant donec pellentesque et facilisis urna. Venenatis, mauris elementum netus morbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat c. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo scelerisque ac. Consequat ullamcorper ullamcorper volutpat orci urna potenti velit. Sit dictum scelerisque commodo, in ut. Feugiat nunc cursus a gravida pulvinar aliquet varius vitae. Quam sed cursus quisque mauris vestibulum sem pulvinar urna. Habitasse ante enim rhoncus, facilisi arcu sagittis, sed. Curabitur nibh imperdiet enim est dui..."
                        btnText="Davomini o'qish"
                    />

                    <CitiLeftPart
                        title="Xitoyga sayoxat"
                        kalendar="23.01.2021"
                        hteg="Biznes, Xitoy"
                        lines="10"
                        url={xitoy}
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tristique volutpat commodo, sed risus, vitae. Habitant donec pellentesque et facilisis urna. Venenatis, mauris elementum netus morbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat bibendum fringilla.
                Magna nam est morbi molestie vel nunc. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo scelerisque ac. Consequat ullamcorper ullamcorper volutpat orci urna potenti velit. Sit dictum scelerisque commodo, in ut. Feugiat nunc cursus a gravida pulvinar aliquet varius vitae. Quam sed cursus quisque mauris vestibulum sem pulvinar urna. Habitasse ante enim rhoncus, facilisi arcu sagittis, sed. Curabitur nibh imperdiet enim est dui..."
                        btnText="Davomini o'qish"
                    />

                    <CitiLeftPart
                        title="Xitoyga sayoxat"
                        kalendar="23.01.2021"
                        hteg="Biznes, Xitoy"
                        url={xitoy}
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tristique volutpat commodo, sed risus, vitae. Habitant donec pellentesque et facilisis urna. Venenatis, mauris elementum netus morbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat bibendum fringilla.
                    Magna nam est morbi molestie vel nunc. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo scelerisque ac. Consequat ullamcorper ullamcorper volutpat orci urna potenti velit. Sit dictum scelerisque commodo, in ut. Feugiat nunc cursus a gravida pulvinar aliquet varius vitae. Quam sed cursus quisque mauris vestibulum sem pulvinar urna. Habitasse ante enim rhoncus, facilisi arcu sagittis, sed. Curabitur nibh imperdiet enim est dui..."
                        btnText="Davomini o'qish"
                    />



                </Grid>

                <Grid xs={12} sm={12} className="msa2" item md={4}>
                    <div className="imgad" ><ImgContainer src={ad} width="80%" /></div>
                    <div className="imgad" ><ImgContainer src={ad} width="80%" /></div>
                    <div className="imgad" ><ImgContainer src={ad} width="80%" /></div>
                    <div className="imgad" ><ImgContainer src={ad} width="80%" /></div>
                </Grid>
            </Grid>

        </Wrapper>
    )
}
