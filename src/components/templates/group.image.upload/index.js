import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import {Wrapper} from "./style"
const Demo = (props) => {
 const {fileList, setFileList} = props

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(newFileList)
    // const reader = new FileReader();
    // reader.readAsDataURL(file.originFileObj);
  };

  // const onPreview = async file => {
  //   let src = file.url;
  //   if (!src) {
  //     src = await new Promise(resolve => {
  //       const reader = new FileReader();
  //       reader.readAsDataURL(file.originFileObj);
  //       // reader.onload = () => resolve(reader.result);
  //     });
  //   }
  //   // const image = new Image();
  //   // image.src = src;
  //   // const imgWindow = window.open(src);
  //   // imgWindow.document.write(image.outerHTML);
  // };

  return (
    <Wrapper>
        <ImgCrop rotate zoom>
        <Upload
            // action="http://165.232.76.226/api/gids/edit/gallery/"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            // onPreview={onPreview}/
        >
            {fileList.length < 5 && '+ Upload'}
        </Upload>
        </ImgCrop>
    </Wrapper>
  );
};

export default Demo