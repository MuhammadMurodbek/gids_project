import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import React,{useState, useEffect} from "react";
import {CameraOutlined} from "@ant-design/icons"
import "./style.css"
import Loader from "react-loader-spinner";
import toast from "react-hot-toast"
import {postResponse} from "../../../hooks/response_get"
import { useTranslation } from 'react-i18next';

const Demo = ({loading, setLoading, list, setCallback, role, urlType}) => {
  const [url, setUrl] = useState({success:'', error:'', loading:'false'})
  const { t } = useTranslation()
  const onChange = ( newFileList) => {
    return null
  };
  const handleSubmitOk = (e) => {
    setLoading(true)
    const form = new FormData()
    form.append('image',e)
    postResponse(`/api/${role}s/edit/${urlType}/`, form, setUrl)
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
    if(url?.success!=='') toast.success(t("MTmenHaqimda.loaded"))
    else if(url?.error!=='') toast.error(t("MTmenHaqimda.notogri"))
  },[url])
  return(
      <div className="cropper_container ext">
        <div className="icon_wrapper ext">
            <ImgCrop minZoom={-10} grid aspect={3/2} modalOk="ok" name="image" onModalOk={handleSubmitOk} rotate shape="rect" >
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