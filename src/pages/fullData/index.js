import React from "react";
import { Wrapper } from "./index.style";
import { Grid } from "@material-ui/core";
import xitoy from "../../assets/img/citiyes/xitoy2.png";
import ImgContainer from "../../components/molecules/img.container";
import ad from "../../assets/img/citiyes/ad.png";
import delbtn from "../../assets/img/citiyes/buttondel.svg";
import edit from "../../assets/img/citiyes/buttonedit.svg";
import Button from "../../components/atom/button";
import CitiLeftPart from "../../components/organism/citiesLeftPart";

export default function Index() {
  const getRole = JSON.parse(localStorage.getItem("user_token"));
  const { role } = getRole;

  return (
    <div>
      <Wrapper>
        <Grid justifyContent="center" container spacing={1}>
          <Grid item xs={12} md={8}>
            <CitiLeftPart
              title="Xitoyga sayoxat"
              kalendar="23.01.2021"
              hteg="Biznes, 
                            Xitoy"
              url={xitoy}
              lines=" "
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tristique volutpat commodo, sed risus, vitae. Habitant donec pellentesque et facilisis urna. Venenatis, mauris elementum netus morbi. Elit ultricies nisi, maecenas turpis  ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat bibendum fringilla.
                            Magna nam est morbi molestie vel nunc. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo scelerisque ac. Consequat ullamcorper ullamcorper volutpat orci urna potenti velit. Sit dictum scelerisque commodo, in ut. Feugiat nunc cursus a gravida pulvinar aliquet varius vitae. Quam sed cursus quisque mauris vestibulum sem pulvinar urna. Habitasse ante enim rhoncus, facilisi arcu sagittis, sed. Curabitur nibh imperdiet enim est dui...
                            orbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat bibendum fringilla.
                            Magna nam est morbi molestie vel nunc. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo sceleorbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat bibendum fringilla.
                            Magna nam est morbi molestie vel nunc. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo sceleorbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat bibendum fringilla.
                            Magna nam est morbi molestie vel nunc. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo scele 
                            tristique volutpat commodo, sed risus, vitae. Habitant donec pellentesque et facilisis urna. Venenatis, mauris elementum netus morbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat bibendum fringilla.
                            Magna nam est morbi molestie vel nunc. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo scelerisque ac. Consequat ullamcorper ullamcorper volutpat orci urna potenti velit. Sit dictum scelerisque commodo, in ut. Feugiat nunc cursus a gravida pulvinar aliquet varius vitae. Quam sed cursus quisque mauris vestibulum sem pulvinar urna. Habitasse ante enim rhoncus, facilisi arcu sagittis, sed. Curabitur nibh imperdiet enim est dui...
                            orbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat bibendum fringilla.
                            Magna nam est morbi molestie vel nunc. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo sceleorbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat bibendum fringilla.
                            Magna nam est morbi molestie vel nunc. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo sceleorbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat bibendum fringilla.
                            Magna nam est morbi molestie vel nunc. Donec metus, senectus a convallis quis scelerisque.tristique volutpat commodo, sed risus, vitae. Habitant donec pellentesque et facilisis urna. Venenatis, mauris elementum netus morbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat bibendum fringilla.
                            Magna nam est morbi molestie vel nunc. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo scelerisque ac. Consequat ullamcorper ullamcorper volutpat orci urna potenti velit. Sit dictum scelerisque commodo, in ut. Feugiat nunc cursus a gravida pulvinar aliquet varius vitae. Quam sed cursus quisque mauris vestibulum sem pulvinar urna. Habitasse ante enim rhoncus, facilisi arcu sagittis, sed. Curabitur nibh imperdiet enim est dui...
                            orbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat bibendum fringilla.
                            Magna nam est morbi molestie vel nunc. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo sceleorbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat bibendum fringilla.
                            Magna nam est morbi molestie vel nunc. Donec metus, senectus a convallis quis scelerisque. Risus magna tellus ante sollicitudin vehicula quis commodo sceleorbi. Elit ultricies nisi, maecenas turpis pulvinar ultrices. Eros, placerat lacinia diam lorem ultrices sem ullamcorper blandit lorem. Urna sodales dictumst amet, ornare et, morbi quis ut arcu. Ac tortor senectus consequat vulputate eleifend magna. Aliquam quis faucibus in tincidunt lacus, fusce. Sagittis accumsan, amet risus natoque eu quis dictum. Egestas nisl quis maecenas euismod. Ultrices eget feugiat bibendum fringilla.
                            Magna nam est morbi molestie vel nunc. Donec metus, senectus a convallis quis scelerisque.
                            "
            />
            <div className="mualif">
              <div className="mualif-text">
                <b className="mualif-b">Muallif: </b>
                <span> Abdusattor Ergashev</span>
              </div>
              {role === "simple_user" ? (
                ""
              ) : (
                <div className="editbtn">
                  <Button className="del-edit">
                    <img className="img2" src={edit} alt="asdf" />
                  </Button>
                  <Button className="del-edit" type="outlined">
                    <img className="img1" src={delbtn} alt="asdf" />
                  </Button>
                </div>
              )}
            </div>
          </Grid>
          <Grid item xs={12} md={4} className="image_adds">
            <div className="imgad">
              <ImgContainer src={ad} width="100%" />
            </div>
            <div className="imgad">
              <ImgContainer src={ad} width="100%" />
            </div>
            <div className="imgad">
              <ImgContainer src={ad} width="100%" />
            </div>
            <div className="imgad">
              <ImgContainer src={ad} width="100%" />
            </div>
          </Grid>
        </Grid>
      </Wrapper>
    </div>
  );
}
