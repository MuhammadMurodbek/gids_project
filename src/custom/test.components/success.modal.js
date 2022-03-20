import React,{useState} from 'react';
import { Modal } from 'antd';
import {CheckCircleOutlined} from "@ant-design/icons"

const ModalSpinner = (data) => {
  const [state, setState] = useState(true)
  const handleCancel = () => {
    setState(false);
  }
//   console.log(data)
  return (
    <>
      <Modal title={<span style={{color:'green'}}>Successfully created</span>} visible={state} onCancel={handleCancel} onOk={handleCancel}>
            <div style={{ color:'green', textAlign:'center'}}>Status: {data?.data?.status}.  StatusText: {data?.data?.statusText}</div><br/>
            <div style={{color:"green", display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}><CheckCircleOutlined style={{fontSize:"3rem", color:'green'}} /><span style={{fontSize:'1.3rem'}}>Success</span></div>
      </Modal>
    </>
  );
};

export default ModalSpinner