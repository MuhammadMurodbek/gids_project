import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import React,{useState, useEffect, useMemo} from "react";
import {CameraOutlined} from "@ant-design/icons"
import "./style.css"
import Loader from "react-loader-spinner";
import toast from "react-hot-toast"
import {postResponse} from "../../../hooks/response_get"
import { useTranslation } from 'react-i18next';

const Demo = ({loading, setLoading, list, setCallback, role, urlType}) => {
  const [url, setUrl] = useState({success:'', error:'', loading:'false'})
  const { t } = useTranslation()
  let check = true
  const onChange = ( e) => {
    let data = e?.file?.originFileObj
    if(data && check && !loading){
      const form = new FormData()
      form.append('image',data)
      console.log(data)
      setLoading(true)
      postResponse(`/api/${role}s/edit/${urlType}/`, form, setUrl)
    }
    check = false
  };
  useEffect(()=>{
    if(url?.success!=='' || url?.error!==''){
      setCallback(prev=>!prev)
    }
    if(url?.success!=='') toast.success(t("MTmenHaqimda.loaded"))
    else if(url?.error!=='') toast.error(t("MTmenHaqimda.notogri"))
    setLoading(false)
  },[url])
  return(
      <div className="cropper_container ext">
        <div className="icon_wrapper ext">
            {/* <ImgCrop minZoom={-5} grid aspect={1/1} modalOk="ok" name="image" onModalOk={handleSubmitOk} rotate shape="rect" > */}
                <Upload onChange={onChange} name="image">
                    <div className="icb add_icon gall">
                        {
                          loading ? <Loader style={{position: 'relative', top:0}} type="Watch" width={30} height={30}/>: <CameraOutlined className="add_icon" style={{ fontSize: '28px' }}/>
                        }
                    </div>
                </Upload>
            {/* </ImgCrop> */}
        </div>
      </div>
    )
} 

export default Demo;