import React,{useState} from 'react';
import { Modal } from 'antd';

const ModalSpinner = ({data, title}) => {
  const [state, setState] = useState(true)
  const handleCancel = () => {
    setState(false);
  }
  console.log(data)
  return (
    <>
      <Modal width={700} title={<span style={{color:'orangered'}}>{title || 'Something went wrong...'}</span>} visible={state} onCancel={handleCancel} onOk={handleCancel}>
            <div style={{ color:'orangered'}}>Status: {data?.data?.status || data?.status}.  StatusText: {data?.data?.statusText || data?.statusText}</div><br/>
            <div>{JSON.stringify(data)?.substr(0,800)}</div>
      </Modal>
    </>
  );
};

export default ModalSpinner