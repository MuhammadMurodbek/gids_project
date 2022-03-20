import React,{useState} from 'react';
import { Modal } from 'antd';

const ModalSpinner = (data) => {
  const [state, setState] = useState(true)
  const handleCancel = () => {
    setState(false);
  }
  console.log(data)
  return (
    <>
      <Modal width={700} title={<span style={{color:'orangered'}}>Something went wrong....</span>} visible={state} onCancel={handleCancel} onOk={handleCancel}>
            <div style={{ color:'orangered'}}>Status: {data?.data?.status}.  StatusText: {data?.data?.statusText}</div><br/>
            <div>{JSON.stringify(data).substr(0,800)}</div>
      </Modal>
    </>
  );
};

export default ModalSpinner