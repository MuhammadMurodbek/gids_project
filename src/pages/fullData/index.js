import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './index.style';
import { Grid } from '@material-ui/core';
import img2 from '../../assets/img/request/2.svg';
import img3 from '../../assets/img/request/3.svg';
import xitoy from '../../assets/img/citiyes/xitoy2.png';
import ImgContainer from "../../components/molecules/img.container";
import ad from '../../assets/img/citiyes/ad.png'
import delbtn from '../../assets/img/citiyes/buttondel.svg';
import edit from '../../assets/img/citiyes/buttonedit.svg';
import Button from '../../components/atom/button';

export default function index() {
    return (
        <div>
            <Wrapper>
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

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu et auctor ornare scelerisque ipsum posuere nec. Egestas tellus suspendisse donec arcu adipiscing tellus accumsan. Faucibus pellentesque pretium luctus et. Massa felis risus commodo morbi id semper fringilla ultricies ante. Dui rutrum elit convallis viverra quam odio consequat. Nunc in nisi, ipsum at turpis. Mattis urna venenatis bibendum nunc sit. Gravida odio sagittis aliquam faucibus ultricies ultrices lectus lorem sed. Ut habitant hendrerit justo, ultrices eu amet. Pulvinar ultricies duis sit quis sit praesent donec. Tortor neque, lacinia augue nunc pellentesque interdum. Consectetur egestas vitae semper quis tristique sit. <br /><br />
                                Bibendum sit nisi, leo metus. Consectetur lobortis metus pharetra, porttitor diam mi bibendum luctus sit. Dui feugiat morbi donec fringilla mauris est. Sit libero massa proin rhoncus varius tempor pellentesque arcu. Elementum vitae integer rutrum congue. Sit integer pretium sit rutrum.
                                Morbi tempus volutpat, viverra integer malesuada sollicitudin. Tristique sapien facilisis pellentesque elementum egestas senectus nec. Senectus lectus tellus massa mattis cras. Arcu fringilla metus diam aliquam enim sed sodales amet. Odio urna, mi id congue amet convallis. Nullam vitae mattis mollis mauris, id. <br /><br />Tincidunt habitant turpis pretium ut ac donec sit amet, rutrum. Rhoncus diam lacus sed enim est eu. Sem sem libero id proin.
                                Nulla tincidunt ipsum gravida arcu, vestibulum ut in rutrum. Eget maecenas elementum, justo, augue eget vitae rhoncus nunc accumsan. Pellentesque cursus faucibus tellus et est. Vitae ipsum tincidunt interdum in posuere nunc, lorem eget. Dignissim congue tempor sapien risus amet integer sed nam tristique. Mattis cursus bibendum eu gravida amet, pellentesque tristique sed tristique. Accumsan eget aliquam vitae mattis. Eu quis duis justo sed tristique. Pretium scelerisque enim tincidunt ipsum, odio neque, suscipit.<br /><br />
                                Consectetur ut blandit non ut cras id. Purus leo volutpat ut elit. Aliquet neque, gravida tristique tristique elementum. Nibh ut amet suscipit turpis mattis. Quam libero, quisque sodales tempus vitae sit. Sodales magna venenatis quisque eu id neque in hac consectetur. Amet porttitor nulla sodales nulla ornare amet. Leo porttitor orci, leo amet tempus. Imperdiet pellentesque ultrices facilisis ultricies id nunc. Magnis ac consectetur et, aliquam, rhoncus dignissim.<br /><br />
                                Amet tincidunt in semper in quis odio phasellus morbi ac. Posuere pellentesque semper consectetur integer. Lacus duis orci, venenatis sit dui faucibus et ultrices eu. Arcu odio pulvinar dui, rutrum suspendisse tortor. At lectus rutrum mattis ut commodo, urna tellus quis sodales. Viverra gravida ac nisl massa. Hac porttitor nunc amet, in tortor consectetur eget.
                                Egestas dictumst pulvinar eros amet nec arcu, arcu. Molestie eget sit netus pharetra tristique molestie. Vel accumsan viverra eu faucibus vel. Nulla aenean ligula massa malesuada amet. Pharetra nunc, suspendisse risus nunc. Convallis dignissim adipiscing felis morbi etiam. Fermentum aliquam ultrices sapien mattis lacus, et ac viverra. Ultricies odio id purus ut est lectus ut maecenas. Eget nulla pellentesque quam ultricies in sem. Diam ornare sed ipsum ac. Suspendisse lobortis ornare enim, rhoncus in pellentesque arcu.<br /><br />
                                A eu eget in vulputate id adipiscing orci nunc condimentum. Arcu a, sem id sollicitudin habitant. Etiam fringilla nunc commodo commodo duis eget vulputate. Ut pellentesque vestibulum imperdiet tincidunt lorem eu. In iaculis sapien lectus potenti et integer vitae. Eget sagittis, pulvinar fermentum vitae leo, consequat massa blandit. Purus massa sed mauris, eget nunc, metus. Sed scelerisque risus nulla nunc. Turpis rutrum nec posuere pharetra in elementum adipiscing lobortis.<br /><br />
                                Scelerisque viverra gravida neque tellus aliquet magna blandit porttitor libero. Scelerisque eget curabitur cras a lacus. Mauris sem dui proin quis. Scelerisque duis in platea semper. Dolor nunc mauris aenean etiam imperdiet augue<br /><br /> nibh placerat. Enim vehicula enim mattis nulla turpis magna risus. Cursus morbi suscipit consectetur ullamcorper ut risus. Mattis lacus, turpis massa risus. Enim id non, pulvinar aliquam aliquet quis. Vestibulum ac tortor semper et ornare sed et senectus. Ullamcorper adipiscing eu vitae eget blandit tincidunt. Morbi sollicitudin elit id enim duis vivamus. Gravida vitae vitae adipiscing pellentesque egestas adipiscing consequat, nibh turpis. Adipiscing egestas purus, et duis.<br /><br />
                                Semper proin velit interdum nunc. Sit eget velit in faucibus euismod mollis. Lacinia diam adipiscing scelerisque et non accumsan, in sed. Vestibulum at eu diam lorem risus mollis ac vestibulum congue. In massa risus facilisi velit ullamcorper. Risus enim, risus molestie rutrum pulvinar. Turpis enim, lorem platea nulla tellus quam senectus mi, diam. Pellentesque amet, et, libero donec eu proin mus ipsum integer. Euismod pellentesque tellus dignissim amet in. Vitae faucibus ultrices facilisis vel a. Sed nibh pretium tincidunt id. Ipsum consectetur vulputate nibh neque. Integer sed tristique quis penatibus est nam sit sem risus.<br /><br />
                                Quam a ultricies tempus, id est pellentesque egestas et id. Augue donec bibendum eget dui mattis. Vitae, aliquam varius cras tempor ornare diam elementum pulvinar. Urna tempor ac egestas in at nam eu. Sit eget at ultrices nibh egestas risus. Vel integer lectus mattis sapien. Nibh eu massa viverra diam maecenas ut sed. Congue enim sapien, cursus aliquam commodo mattis ultrices. Lectus amet eu molestie interdum vel bibendum mattis morbi. Aliquet nec consectetur fringilla id metus blandit non, hendrerit enim. Adipiscing ante massa fames libero mi ultrices nisl, enim id. Sed nibh.

                            </Grid>
                            <Grid   item md={12}  className="mualif" >
                                
                                    <div className="mualif-text">
                                        <b className="mualif-b">Muallif: </b>
                                        <span> Abdusattor Ergashev</span>
                                    </div>
                                    <div className="editbtn">
                                        <Button  className="del-edit">
                                            <img className="img2" src={edit} alt="asdf" />
                                        </Button>
                                        <Button className="del-edit" type="outlined">
                                            <img className="img1" src={delbtn} alt="asdf" />
                                        </Button>
                                    </div>
                               
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid className="msa2" item md={4}>
                        <div className="imgad" ><ImgContainer src={ad} width="70%" /></div>
                        <div className="imgad" ><ImgContainer src={ad} width="70%" /></div>
                        <div className="imgad" ><ImgContainer src={ad} width="70%" /></div>

                    </Grid>

                </Grid>

            </Wrapper>
        </div>
    )
}
