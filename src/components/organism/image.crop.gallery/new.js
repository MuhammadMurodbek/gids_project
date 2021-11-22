import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import React,{useState} from "react";
import {CameraOutlined} from "@ant-design/icons"
import "./style.css"
import Loader from "react-loader-spinner";
import {postResponse} from "../../../hooks/response_get"
const Demo = () => {
  const [url, setUrl] = useState()
  const onChange = ( newFileList) => {
    return null
  };
  const handleSubmitOk = (e) => {
    const form = new FormData()
    form.append('image',e)
    postResponse('/api/gids/edit/gallery/', form, setUrl)
  }
  return(
      <div className="cropper_container">
        <div className="icon_wrapper">
            <ImgCrop modalOk="ok" name="image" onModalOk={handleSubmitOk} rotate shape="rect" >
                <Upload onChange={onChange} name="image">
                    <div className="icb add_icon gall">
                        <CameraOutlined className="add_icon" style={{ fontSize: '28px' }}/>
                        <Loader type="Watch" width={30} height={30}/>
                    </div>
                </Upload>
            </ImgCrop>
        </div>
      </div>
    )
} 

export default Demo;