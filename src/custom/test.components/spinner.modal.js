import React from 'react';
import { Modal } from 'antd';
import Spinner from "../../components/atom/loading.spinner.line"

const ModalSpinner = () => {
  return (
    <>
      <Modal title="Loading..." visible={true}>
            <Spinner width={70} height={70}/>
      </Modal>
    </>
  );
};

export default ModalSpinner