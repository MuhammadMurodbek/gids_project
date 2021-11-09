import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import React,{useState} from "react";
import {DeleteOutlined, PlusCircleOutlined} from "@ant-design/icons"
import "./style.css"
import noUser from "../../../assets/img/gid-personal/no_user.png"
const Demo = ({setState, state}) => {
  const [imageObj, setImageObj] = useState()
  const [url, setUrl] = useState()
  const onChange = ( newFileList) => {
    setImageObj(newFileList?.file)
    if(state?.image !== ''){
      setState({...state,image:null})
    }
  };
  const handleSubmitOk = (e) => {
    setUrl(URL.createObjectURL(e))
    if(setState)
    setState({...state, imageFile: e})
  }
  const handleDelete = () => {
    setState({...state,image:null, imageFile: null})
    setUrl('')
  }
  return(
      <div className="cropper_container">
        {
          state?.image !== null ? <img src={state?.image || noUser} alt="asdfdf" className="image_cropped"/>:
          <img src={url || noUser} alt="asdfdf" className={url ? "image_cropped":"image_no_user"}/>
        }
        <div className="icon_wrapper">
            <ImgCrop modalOk="ok" name="image" onModalOk={handleSubmitOk} rotate shape="round" >
                <Upload onChange={onChange} name="image">
                    <div className="icb add_icon">
                        <PlusCircleOutlined className="add_icon" style={{ fontSize: '22px' }}/>
                    </div>
                </Upload>
            </ImgCrop>
            <div className="del_icon icb">
                <DeleteOutlined onClick={handleDelete} style={{ fontSize: '22px' }}/>
            </div>
        </div>
      </div>
    )
} 

export default Demo;
