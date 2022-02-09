import React, {useState, useEffect} from "react";
import { Wrapper } from "./index.style";
import { Modal} from 'antd';
import { Grid } from "@material-ui/core";
import {useParams, useHistory} from "react-router-dom"
import ImgContainer from "../../components/molecules/img.container";
import ad from "../../assets/img/citiyes/ad.png";
// import delbtn from "../../assets/img/citiyes/buttondel.svg";
// import edit from "../../assets/img/citiyes/buttonedit.svg";
import Button from "../../components/atom/button";
import CitiLeftPart from "../../components/organism/citiesLeftPart";
import { getResponse, deleteResponse } from "../../hooks/response_get"
import Spinner from "../../components/atom/loading.spinner.line"
import {error, success} from "../../components/organism/modals"
import NoDataPage from "../../components/templates/no.data.page.js"
export default function Index() {
  const {id} = useParams()
  const history = useHistory()
  const getRole = JSON.parse(localStorage.getItem("user_token"));
  const [state, setState] = useState({success: '', error: '', loader:false})
  const [getArticle, setGetArticle] = useState({})
  const [infoDelete, setInfoDelete] = useState(null)
  const [deleteCallback, setDeleteCallback ] = useState(false)
  useEffect(() => {
    getResponse(`/api/posts/article/${id}`, setState)
  }, [])
  useEffect(() => {
    if(state?.success) {
      setGetArticle(state.success.data)
    }
  }, [state])
  const deleteFn = () => {
    deleteResponse(`/api/posts/article/${id}/`, getArticle?.title, setDeleteCallback, setInfoDelete)
  }
  
  useEffect(()=>{
    if(infoDelete && infoDelete?.status === 204){
      Modal.success({
        content:'Deleted successfully',
        onOk() {
            history.push('/gid-personal-wider')
        },
      },)
    } 
    if(infoDelete && infoDelete?.status !== 204){
      Modal.error({
        content:'Something went wrong',
        onOk() {
            history.push('/gid-personal-wider')
        },
      },)
    } 
  },[infoDelete])
  const editFn = () => {
    history.push(`/write-article/edit/${id}`)
  }
  return (
    <div>
      <Wrapper>
        {
          state?.loader ? <Spinner marginTop="60px" width={ 50 } height={ 50 } />:
          (state?.success !== "" && state?.error === '') ?
          <>
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
                  <div className="editbtn">
                    <Button onClick={editFn} type="outlined">edit</Button>
                  </div>
                  <div className="deletebtn">
                    <Button onClick={deleteFn} type="outlined">delete</Button>
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
              <Button type="outlined" onClick={()=>history.push('/gid-personal-wider')}>Ortga qaytish</Button>
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