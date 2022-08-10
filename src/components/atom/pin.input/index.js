import React,{useState} from "react"
import { VerificationPin } from "react-verification-pin";
import { useTranslation } from 'react-i18next';

const YourComponent = () => {
  const { t } = useTranslation();

  const [status, setStatus] = useState("process");

  const handleOnFinish = (code) => {
    setStatus("wait");

    // simulating a search on your api
    if (code === "111111") {
      setTimeout(() => {
        setStatus("error");
      }, 300000);
    } else {
      setTimeout(() => {
        setStatus(t("emailni_tasdiqlash.succes"));
      }, 30000);
    }
  };

  return (
    <VerificationPin
      type="number"
      inputsNumber={5}
      status={status}
      title={t("emailni_tasdiqlash.kodTasdiqlang")}
      subTitle={t("emailni_tasdiqlash.emailKod")}
      onFinish={handleOnFinish}
    />
  );
}
export default YourComponent