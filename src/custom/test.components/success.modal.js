import React,{useState} from 'react';
import { Modal } from 'antd';
import {CheckCircleOutlined} from "@ant-design/icons"
import { useTranslation } from 'react-i18next';


const ModalSpinner = ({data, title, onSuccess}) => {
  const { t } = useTranslation();

  const [state, setState] = useState(true)
  const handleCancel = () => {
    setState(false);
  }
//   console.log(data)
  return (
    <>
      <Modal title={<span style={{color:'green'}}> {title || t("emailni_tasdiqlash.succesCreated")}</span>} visible={state} onCancel={handleCancel} onOk={onSuccess || handleCancel}>
            <div style={{ color:'green', textAlign:'center'}}>Status: {data?.data?.status || 201} {t("emailni_tasdiqlash.statusText")}: {data?.data?.statusText || 'Done !!'}</div><br/>
            <div style={{color:"green", display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}><CheckCircleOutlined style={{fontSize:"3rem", color:'green'}} /><span style={{fontSize:'1.3rem'}}>{t("emailni_tasdiqlash.succes")}</span></div>
      </Modal>
    </>
  );
};

export default ModalSpinner