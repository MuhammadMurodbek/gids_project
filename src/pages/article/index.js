import React from 'react'
import { AboutTravel, Wrapper } from './index.style'
import { TextTitle } from '../../styles/textTitle/index.style'
import Button from "../../components/atom/button";
import { Grid } from '@material-ui/core';
import CitiLeftPart from '../../components/organism/citiesLeftPart';
import ImgContainer from "../../components/molecules/img.container"
import ad from '../../assets/img/citiyes/ad.png'
import xitoy from '../../assets/img/citiyes/xitoy.png';

export default function index() {
    return (
        <Wrapper>
            <AboutTravel>
                <TextTitle>Safar qalay o‘tdi?</TextTitle>
                <p className="aboutT__text">Safar qanday o’tgani haqida maqola yozib boshqalarga foyda ulashing ham daromadingizni kengaytiring!</p>
                <TextTitle width="50%" left="auto" right="auto" bottom="40px">
                    <Button>Maqola yozish</Button>
                </TextTitle>
            </AboutTravel>
            
            <Grid justifyContent="center" container spacing={1}>
                <Grid item md={7}>

                    <CitiLeftPart 
                        title="Xitoyga sayoxat"
                        kalendar="23.01.2021"
                        hteg="Biznes, Xitoy"
                        url={xitoy}  
                        lines="10"  
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tristique volutpat commodo, sed risus, vitae. Habitant donec pellentesque et facilisis urna. Venenatis, mauris elementum netus morbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat c. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo scelerisque ac. Consequat ullamcorper ullamcorper volutpat orci urna potenti velit. Sit dictum scelerisque commodo, in ut. Feugiat nunc cursus a gravida pulvinar aliquet varius vitae. Quam sed cursus quisque mauris vestibulum sem pulvinar urna. Habitasse ante enim rhoncus, facilisi arcu sagittis, sed. Curabitur nibh imperdiet enim est dui..."

                        btnText="Taxrirlash "
                    />
                    <CitiLeftPart 

                        title="Xitoyga sayoxat"
                        kalendar="23.01.2021"
                        hteg="Biznes, Xitoy"
                        url={xitoy}  
                        lines="10"  
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tristique volutpat commodo, sed risus, vitae. Habitant donec pellentesque et facilisis urna. Venenatis, mauris elementum netus morbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat c. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo scelerisque ac. Consequat ullamcorper ullamcorper volutpat orci urna potenti velit. Sit dictum scelerisque commodo, in ut. Feugiat nunc cursus a gravida pulvinar aliquet varius vitae. Quam sed cursus quisque mauris vestibulum sem pulvinar urna. Habitasse ante enim rhoncus, facilisi arcu sagittis, sed. Curabitur nibh imperdiet enim est dui..."

                        btnText="Taxrirlash "
                    />
                    <CitiLeftPart 
                        title="Xitoyga sayoxat"
                        kalendar="23.01.2021"
                        hteg="Biznes, Xitoy"
                        url={xitoy}  
                        lines="10"  
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tristique volutpat commodo, sed risus, vitae. Habitant donec pellentesque et facilisis urna. Venenatis, mauris elementum netus morbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat c. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo scelerisque ac. Consequat ullamcorper ullamcorper volutpat orci urna potenti velit. Sit dictum scelerisque commodo, in ut. Feugiat nunc cursus a gravida pulvinar aliquet varius vitae. Quam sed cursus quisque mauris vestibulum sem pulvinar urna. Habitasse ante enim rhoncus, facilisi arcu sagittis, sed. Curabitur nibh imperdiet enim est dui..."

                        btnText="Taxrirlash "
                    />
                    <CitiLeftPart 
                        title="Xitoyga sayoxat"
                        kalendar="23.01.2021"
                        hteg="Biznes, Xitoy"
                        url={xitoy}  
                        lines="10"  
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tristique volutpat commodo, sed risus, vitae. Habitant donec pellentesque et facilisis urna. Venenatis, mauris elementum netus morbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat c. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo scelerisque ac. Consequat ullamcorper ullamcorper volutpat orci urna potenti velit. Sit dictum scelerisque commodo, in ut. Feugiat nunc cursus a gravida pulvinar aliquet varius vitae. Quam sed cursus quisque mauris vestibulum sem pulvinar urna. Habitasse ante enim rhoncus, facilisi arcu sagittis, sed. Curabitur nibh imperdiet enim est dui..."

                        btnText="Taxrirlash "
                    />
                   


                </Grid>

                <Grid className="msa2" item md={4}>
                   <ImgContainer src={ad} width="70%"/> 
                   <ImgContainer src={ad} width="70%"/>
                   <ImgContainer src={ad} width="70%"/>
                   <ImgContainer src={ad} width="70%"/>
                </Grid>
            </Grid>

        </Wrapper>
    )
}