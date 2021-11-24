import React, {useState, useEffect} from "react";
import { Wrapper } from "./index.style";
import { Grid } from "@material-ui/core";
import {useParams} from "react-router-dom"
import xitoy from "../../assets/img/citiyes/xitoy2.png";
import ImgContainer from "../../components/molecules/img.container";
import ad from "../../assets/img/citiyes/ad.png";
import delbtn from "../../assets/img/citiyes/buttondel.svg";
import edit from "../../assets/img/citiyes/buttonedit.svg";
import Button from "../../components/atom/button";
import CitiLeftPart from "../../components/organism/citiesLeftPart";
import { getResponse } from "../../hooks/response_get"

export default function Index() {
  const {id} = useParams()
  const getRole = JSON.parse(localStorage.getItem("user_token"));
  const { role } = getRole;
  const [state, setState] = useState({success: '', error: ''})
  const [getArticle, setGetArticle] = useState({})

  useEffect(() => {
  getResponse(`/api/posts/article/${id}`, setState)
  }, [])
 useEffect(() => {
  if(state?.success) {
    setGetArticle(state.success.data)
  }
 }, [state])
 console.log(getArticle)

  return (
    <div>
      <Wrapper>
        <Grid justifyContent="center" container spacing={1}>
          <Grid item xs={12} md={8}>
            <CitiLeftPart
              title={getArticle.title}
              kalendar="23.01.2021"
              hteg={getArticle?.tags}
              url={getArticle?.image}
              text={getArticle?.content}
            />

            <div className="mualif">
              <div className="mualif-text">
                <b className="mualif-b">Muallif: </b>
                <span> {getArticle?.author?.first_name  +" "+  getArticle?.author?.last_name}  </span>
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
            <div className="imgpard">
              <ImgContainer src={ad} width="100%" />
            </div>
            <div className="imgpard">
              <ImgContainer src={ad} width="100%" />
            </div>
            <div className="imgpard">
              <ImgContainer src={ad} width="100%" />
            </div>
          </Grid>
        </Grid>
      </Wrapper>
    </div>
  );
}
