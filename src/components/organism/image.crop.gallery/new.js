import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import React,{useState, useEffect} from "react";
import {CameraOutlined} from "@ant-design/icons"
import "./style.css"
import Loader from "react-loader-spinner";
import toast from "react-hot-toast"
import {postResponse} from "../../../hooks/response_get"
const Demo = ({loading, setLoading, list, setCallback, role}) => {
  const [url, setUrl] = useState({success:'', error:'', loading:'false'})
  const onChange = ( newFileList) => {
    return null
  };
  const handleSubmitOk = (e) => {
    setLoading(true)
    const form = new FormData()
    form.append('image',e)
    postResponse(`/api/${role}s/edit/certificate/`, form, setUrl)
  }
  useEffect(()=>{
    if(list.length > 0 && url?.success!==''){
      setLoading(false)
    }
  },[list,url])
  useEffect(()=>{
    if(url?.success!=='' || url?.error!==''){
      setCallback(prev=>!prev)
    }
    if(url?.success!=='') toast.success('Loaded successfully')
    else if(url?.error!=='') toast.error('Something went wrong')
  },[url])
  return(
      <div className="cropper_container ext">
        <div className="icon_wrapper ext">
            <ImgCrop modalOk="ok" name="image" onModalOk={handleSubmitOk} rotate shape="rect" >
                <Upload onChange={onChange} name="image">
                    <div className="icb add_icon gall">
                        {
                          loading ? <Loader style={{position: 'relative', top:0}} type="Watch" width={30} height={30}/>: <CameraOutlined className="add_icon" style={{ fontSize: '28px' }}/>
                        }
                    </div>
                </Upload>
            </ImgCrop>
        </div>
      </div>
    )
} 

export default Demo;