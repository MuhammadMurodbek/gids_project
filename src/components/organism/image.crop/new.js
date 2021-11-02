import ImgCrop from 'antd-img-crop';
import { Upload } from 'antd';
import React,{useState} from "react";
import {DeleteOutlined, PlusCircleOutlined} from "@ant-design/icons"
import "./style.css"
import noUser from "../../../assets/img/gid-personal/no_user.png"
const Demo = ({setState, state}) => {
  const [url, setUrl] = useState()
  const handleSubmit = (e) => {
    setUrl(URL.createObjectURL(e))
    const formData = new FormData();
	formData.append('image', e);
    if(setState && state)
    setState({...state, image: formData})
  }
  return(
      <div className="cropper_container">
        <img src={url || noUser} alt="asdfdf" className={url ? "image_cropped":"image_no_user"}/>
        <div className="icon_wrapper">
            <ImgCrop modalOk="ok" onModalOk={handleSubmit} rotate shape="round" >
                <Upload onPreview={(e)=>{e.preventDefault()}}>
                    <div className="icb add_icon">
                        <PlusCircleOutlined className="add_icon" style={{ fontSize: '22px' }}/>
                    </div>
                </Upload>
            </ImgCrop>
            <div className="del_icon icb">
                <DeleteOutlined onClick={()=>setUrl('')} style={{ fontSize: '22px' }}/>
            </div>
        </div>
      </div>
    )
} 

export default Demo;
// const React = require('react')
// class Upload extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       file: null
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }
//   handleChange(event) {
//     this.setState({
//       file: URL.createObjectURL(event.target.files[0])
//     })
//   }
//   render() {
//     return (
//       <div>
//         <input type="file" onChange={this.handleChange}/>
//         <img src={this.state.file}/>
//       </div>
//     );
//   }
// }
// module.exports = Upload