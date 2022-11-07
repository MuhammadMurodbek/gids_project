import { Modal } from 'antd';
import { t } from 'i18next';


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
  
   export const Success22 = () => {
    // const {t} = useTranslation()
    
    return(
    Modal.success({
      title:  <h2> {t("arizamodal.rahmat")} </h2>,
      content: `${t("arizamodal.modaltextjonatildi")}`
    })
    )
  }
  export default Success22;
  
  export const Error22 = () => {

    return(
    Modal.error({
      title: `${t("arizamodal.arizaJonatilmadi")}`,
      content: `${t("arizamodal.arizaXatolik")}`,
    })
    )
  }
  
  export function warning() {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  }