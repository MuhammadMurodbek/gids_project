import React, { useState } from 'react';
import { Modal } from 'antd';
import { SecurityScanOutlined } from '@ant-design/icons'
import { mainGreen } from "../../styles/global/colors"
import { useTranslation } from "react-i18next"
import Security from "../../assets/img/security.png"
const ModalBtn = ({ showModal, handleOk, handleCancel, isModalVisible , type}) => {
  const {t} = useTranslation()

  console.log(type)
  return (
    <>
      <div >
        <Modal title={<span style={{ fontSize: '1.11rem' }}>Gits.uz</span>} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} style={{ top: "25%" }}>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <img src={Security} alt="asdf" style={{ width: 150, height: 'auto' }} />
          </div>

          <p style={{ fontSize: '1.1rem', textAlign: 'center' }}>
            <SecurityScanOutlined style={{ fontSize: '1.4rem', color: mainGreen, marginTop: 20, position: 'relative', top: 4 }} />
            {t("arizaqoldirish.ArizaOldin")}
          </p>
        </Modal>
      </div>
    </>
  );
};
export default ModalBtn
