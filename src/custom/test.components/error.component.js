import React,{useState} from 'react';
import { Modal } from 'antd';
import { useTranslation } from 'react-i18next'

const ModalSpinner = ({data, title}) => {
  const { t } = useTranslation()
  const [state, setState] = useState(true)
  const handleCancel = () => {
    setState(false);
  }
  // console.log(data)
  return (
    <>
      <Modal width={700} title={<span style={{color:'orangered'}}>{t("auth_parolniTiklash.xatolik")}</span>} visible={state} onCancel={handleCancel} onOk={handleCancel}>
            <div style={{ color:'orangered'}}>{t("auth_parolniTiklash.xatolik")} {title}</div><br/>
      </Modal>
    </>
  );
};

export default ModalSpinner