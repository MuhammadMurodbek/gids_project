import React, { useCallback, useEffect, useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import {Wrapper} from "./style"
import toast from 'react-hot-toast';
const Demo = (props) => {
 const {fileList, setFileList, postImage} = props
  const onChange =  useCallback(({ fileList: newFileList }) => {
    setFileList(newFileList);
  },[fileList]);
  // useEffect(() => {
  //     if(postImage?.success!=='') toast.success('Successfully loaded')
  //     if(postImage?.error!=='') toast.error('Something went wrong')
  // },[postImage]);
  return (
    <Wrapper>
        <ImgCrop rotate zoom>
        <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
        >
            {'Upload'}
        </Upload>
        </ImgCrop>
    </Wrapper>
  );
};

export default Demo