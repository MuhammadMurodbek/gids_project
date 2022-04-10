import React,{useState} from 'react';
import { Modal } from 'antd';

const ModalSpinner = ({data, title}) => {
  const [state, setState] = useState(true)
  const handleCancel = () => {
    setState(false);
  }
  // console.log(data)
  return (
    <>
      <Modal width={700} title={<span style={{color:'orangered'}}>{'Xatolik yuz berdi...'}</span>} visible={state} onCancel={handleCancel} onOk={handleCancel}>
            <div style={{ color:'orangered'}}>ErrorText: {title}</div><br/>
      </Modal>
    </>
  );
};

export default ModalSpinner