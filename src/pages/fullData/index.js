import React, {useState, useEffect} from "react";
import { Wrapper } from "./index.style";
import { Modal} from 'antd';
import { Grid } from "@material-ui/core";
import {useParams, useHistory} from "react-router-dom"
import ImgContainer from "../../components/molecules/img.container";
import ad from "../../assets/img/citiyes/bn1.png";
import Button from "../../components/atom/button";
import CitiLeftPart from "../../components/organism/citiesLeftPart";
import { getResponse } from "../../hooks/response_get"
import Spinner from "../../components/atom/loading.spinner.line"
import NoDataPage from "../../components/templates/no.data.page.js"
import { useTranslation } from 'react-i18next';
import './main.css'

export default function Index() {
  const { t } = useTranslation()
  const {id} = useParams()
  const history = useHistory()
  const [state, setState] = useState({success: '', error: '', loader:false})
  const [getArticle, setGetArticle] = useState({})
  const [infoDelete, setInfoDelete] = useState(null)
  useEffect(() => {
    getResponse(`/api/posts/article/${id}`, setState,true)
  }, [])
  useEffect(() => {
    if(state?.success) {
      setGetArticle(state.success.data)
    }
  }, [state])
  
  useEffect(()=>{
    if(infoDelete && infoDelete?.status === 204){
      Modal.success({
        content: t("MTmenHaqimda.ochirildi"),
        onOk() {
            history.push('/gid-personal-wider?tab=0')
        },
      },)
    } 
    if(infoDelete && infoDelete?.status !== 204){
      Modal.error({
        content: t("MTmenHaqimda.notogri"),
        onOk() {
            history.push('/gid-personal-wider?tab=0')
        },
      },)
    } 
  },[infoDelete])
  // const editFn = () => {
  //   history.push(`/write-article/edit/${id}`)
  // }
  return (
    <div>
      <Wrapper>
        {
          state?.loader ? <Spinner marginTop="60px" width={ 50 } height={ 50 } />:
          (state?.success !== "" && state?.error === '') ?
          <>
            <Grid className="newpagte" justifyContent="center" container spacing={1}>
              <Grid className="newspagetss" item xs={12} md={8}>
                <CitiLeftPart
                  title={getArticle.title}
                  kalendar={getArticle?.created_at}
                  // hteg={getArticle?.tags}
                  url={getArticle?.image}
                  text={getArticle?.content}
                  name1= {getArticle?.author?.first_name }
                  lastName = { getArticle?.author?.last_name}
                />


                <div className="mualif">
                  <div className="mualif-text">
                    <b className="mualif-b">{t("Blog.muallif")} </b>
                    <span> {getArticle?.author?.first_name  +" "+  getArticle?.author?.last_name}  </span>
                  </div>
                </div>
              </Grid>



              <Grid item xs={12} md={4} className="image_adds">
                <div className="imgpard">
                  <ImgContainer src={ad} width="100%" />
                </div>
              </Grid>
            </Grid>
          
          </>:
          <div style={{width:'100%', textAlign:'center'}}>
              <NoDataPage/>
              <Button type="outlined" onClick={()=>history.push('/gid-personal-wider?tab=0')}>{t("maqolaYozish.orqaga")}</Button>
          </div> 
        }
      </Wrapper>
    </div>
  );
}


// <Button className="del-edit">
// <img className="img2" src={edit} alt="asdf" />
// </Button>
// <Button className="del-edit" type="outlined">
// <img className="img1" src={delbtn} alt="asdf" />
// </Button>
{/* <div className="editbtn">
  <Button onClick={editFn} type="outlined">edit</Button>
</div>
<div className="deletebtn">
  <Button onClick={deleteFn} type="outlined">delete</Button>
</div> */}