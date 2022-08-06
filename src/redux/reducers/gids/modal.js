import { Modal } from 'antd';
import { useTransition } from 'react';
import { useTranslation } from "react-i18next";
// t("arizamodal.modaltextjonatildi")
export function info() { 
  Modal.info({
    title: 'This is a notification message',
    content: (
      <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }
  
   function Success22() {
    const {t} = useTransition()

    Modal.success({
      content:  "Arizangiz muvaffaqiyatli jo’natildi.",
    });
    return(
      <></>
    )
  }
  export default Success22;
  
  export function error() {
    Modal.error({
      title: 'Arizangiz junatilmadi',
      content: 'Arizani junatishda xatolik mavjud...',
    });
  }
  
  export function warning() {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  }