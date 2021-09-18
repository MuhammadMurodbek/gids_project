import React from 'react'
import {Link}  from 'react-router-dom'
import { AboutB, PerentAB, Wrapper } from './index.style'
import ImgContainer from "../../components/molecules/img.container"
import bukhara from '../../assets/img/citiyes/bukhara2.png'
import { TextTitle } from "../../styles/textTitle/index.style"
import { Grid} from '@material-ui/core'
import Truncate from 'react-truncate';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import img2 from '../../assets/img/request/2.svg'
import img3 from '../../assets/img/request/3.svg'
import xitoy from '../../assets/img/citiyes/xitoy.png'
import ad from '../../assets/img/citiyes/ad.png'

export default function index() {
    return (
        <Wrapper>
            <div className="imgBukhara">
                <ImgContainer width="100%" src={bukhara} />
                <p className="bukhara">Bukhara</p>
            </div>
            <PerentAB>
                <AboutB>
                    <div className="Abukhara-title">
                        <p className="Abuhoro-text">Buxoro</p>
                    </div>
                    <div className="Abukhara-text-more" >
                        <b>Buxoro</b> — O‘zbekiston Respublikasining qadimiy shaharlaridan biri, Buxoro viloyatining maʼmuriy, iqtisodiy va madaniy markazi. Buyuk ipаk yo‘lida yirik tijorat markazlaridan bo‘lgan. Oʻzbekistonning janubiy-gʻarbida, Zarafshon daryosi quyi oqimida joylashgan. Toshkentdan 616 km. Buxoro 2 ta shahar rayoni (Fayzulla Xoʻjayev va Toʻqimachilik)ga boʻlingan. Aholisi 280000 (2019). <br /><br />
                        Buxoro shahri qadim zamonlarda qanday nomlangani — nomaʼlum. Milodiy V asrga oid xitoy manbalarida Buxoro shahri Nyumi tarzida tilga olinib oʻtilgan. Binobarin, shaharda shu nomdagi mulk hukmdorining qarorgohi ham boʻlgan. Tan imperiyasining VII asrga oid solnomalarida Buxoro shahri An (Ango), Ansi, Buxo (Buxe, Fuxo) shakllarida qayd etib oʻtilgan. Keyinchalik shahar har xil nomlana boshladi. Arab qadimiy manbalarda u Bumiskat, Madinat us-sufriya (Mis shahar), Numijkat (soʻgʻdcha numij yoki namich degani mashhur degan maʼnoni anglatgan) tarzida keltirilgan.
                    </div>
                </AboutB>
            </PerentAB>

            <TextTitle width="50%" left="auto" right="auto" bottom="40px">
                Blog
            </TextTitle>

            <Grid justifyContent="center" container spacing={1}>
                <Grid item md={7}>
                    <Grid className="msa" container spacing={1}>
                        <Grid className="imte12" item md={12}>
                            <p className="xitoy-text">Xitoygagi safar</p>
                            <div className="title-div-text">
                                <img className="img0" src={img2} alt="adsf" />
                                23.01.2021
                                <img className="img0" src={img3} alt="asdf" />
                                Biznes, Xitoy
                            </div>
                        </Grid>
                        <Grid imte md={12}>
                            <ImgContainer width="100%" src={xitoy} />
                        </Grid>
                        <Grid className="text-xitoy__more" item md={12}>
                            <Truncate lines={10} ellipsis={<span>... <a href='/link/to/  article'>Read more</a></span>}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tristique volutpat commodo, sed risus, vitae. Habitant donec pellentesque et facilisis urna. Venenatis, mauris elementum netus morbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat bibendum fringilla.
                                Magna nam est morbi molestie vel nunc. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo scelerisque ac. Consequat ullamcorper ullamcorper volutpat orci urna potenti velit. Sit dictum scelerisque commodo, in ut. Feugiat nunc cursus a gravida pulvinar aliquet varius vitae. Quam sed cursus quisque mauris vestibulum sem pulvinar urna. Habitasse ante enim rhoncus, facilisi arcu sagittis, sed. Curabitur nibh imperdiet enim est dui
                            </Truncate>
                            <Link className="text-link"  to="#">
                                Davomini o‘qish
                                <ArrowForwardIosIcon className="arrow__readmore"/>
                            </Link>
                        </Grid>
                    </Grid>

                    <Grid className="msa" container spacing={1}>
                        <Grid className="imte12" item md={12}>
                            <p className="xitoy-text">Xitoygagi safar</p>
                            <div className="title-div-text">
                                <img className="img0" src={img2} alt="adsf" />
                                23.01.2021
                                <img className="img0" src={img3} alt="asdf" />
                                Biznes, Xitoy
                            </div>
                        </Grid>
                        <Grid imte md={12}>
                            <ImgContainer width="100%" src={xitoy} />
                        </Grid>
                        <Grid className="text-xitoy__more" item md={12}>
                            <Truncate lines={10} ellipsis={<span>... <a href='/link/to/  article'>Read more</a></span>}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tristique volutpat commodo, sed risus, vitae. Habitant donec pellentesque et facilisis urna. Venenatis, mauris elementum netus morbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat bibendum fringilla.
                                Magna nam est morbi molestie vel nunc. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo scelerisque ac. Consequat ullamcorper ullamcorper volutpat orci urna potenti velit. Sit dictum scelerisque commodo, in ut. Feugiat nunc cursus a gravida pulvinar aliquet varius vitae. Quam sed cursus quisque mauris vestibulum sem pulvinar urna. Habitasse ante enim rhoncus, facilisi arcu sagittis, sed. Curabitur nibh imperdiet enim est dui
                            </Truncate>
                            <Link className="text-link"  to="#">
                                Davomini o‘qish
                                <ArrowForwardIosIcon className="arrow__readmore"/>
                            </Link>
                        </Grid>
                    </Grid>

                    <Grid className="msa" container spacing={1}>
                        <Grid className="imte12" item md={12}>
                            <p className="xitoy-text">Xitoygagi safar</p>
                            <div className="title-div-text">
                                <img className="img0" src={img2} alt="adsf" />
                                23.01.2021
                                <img className="img0" src={img3} alt="asdf" />
                                Biznes, Xitoy
                            </div>
                        </Grid>
                        <Grid imte md={12}>
                            <ImgContainer width="100%" src={xitoy} />
                        </Grid>
                        <Grid className="text-xitoy__more" item md={12}>
                            <Truncate lines={10} ellipsis={<span>... <a href='/link/to/  article'>Read more</a></span>}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tristique volutpat commodo, sed risus, vitae. Habitant donec pellentesque et facilisis urna. Venenatis, mauris elementum netus morbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat bibendum fringilla.
                                Magna nam est morbi molestie vel nunc. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo scelerisque ac. Consequat ullamcorper ullamcorper volutpat orci urna potenti velit. Sit dictum scelerisque commodo, in ut. Feugiat nunc cursus a gravida pulvinar aliquet varius vitae. Quam sed cursus quisque mauris vestibulum sem pulvinar urna. Habitasse ante enim rhoncus, facilisi arcu sagittis, sed. Curabitur nibh imperdiet enim est dui
                            </Truncate>
                            <Link className="text-link"  to="#">
                                Davomini o‘qish
                                <ArrowForwardIosIcon className="arrow__readmore"/>
                            </Link>
                        </Grid>
                    </Grid>

                    <Grid className="msa" container spacing={1}>
                        <Grid className="imte12" item md={12}>
                            <p className="xitoy-text">Xitoygagi safar</p>
                            <div className="title-div-text">
                                <img className="img0" src={img2} alt="adsf" />
                                23.01.2021
                                <img className="img0" src={img3} alt="asdf" />
                                Biznes, Xitoy
                            </div>
                        </Grid>
                        <Grid imte md={12}>
                            <ImgContainer width="100%" src={xitoy} />
                        </Grid>
                        <Grid className="text-xitoy__more" item md={12}>
                            <Truncate lines={10} ellipsis={<span>... <a href='/link/to/  article'>Read more</a></span>}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tristique volutpat commodo, sed risus, vitae. Habitant donec pellentesque et facilisis urna. Venenatis, mauris elementum netus morbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat bibendum fringilla.
                                Magna nam est morbi molestie vel nunc. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo scelerisque ac. Consequat ullamcorper ullamcorper volutpat orci urna potenti velit. Sit dictum scelerisque commodo, in ut. Feugiat nunc cursus a gravida pulvinar aliquet varius vitae. Quam sed cursus quisque mauris vestibulum sem pulvinar urna. Habitasse ante enim rhoncus, facilisi arcu sagittis, sed. Curabitur nibh imperdiet enim est dui
                            </Truncate>
                            <Link className="text-link"  to="#">
                                Davomini o‘qish
                                <ArrowForwardIosIcon className="arrow__readmore"/>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid className="msa2" item md={4}>
                     <div  className="imgad" ><ImgContainer src={ad} width="70%"  /></div>
                     <div  className="imgad" ><ImgContainer src={ad} width="70%"  /></div>
                     <div  className="imgad" ><ImgContainer src={ad} width="70%"  /></div>
                     <div  className="imgad" ><ImgContainer src={ad} width="70%"  /></div>
                </Grid>
            </Grid>

        </Wrapper>
    )
}
