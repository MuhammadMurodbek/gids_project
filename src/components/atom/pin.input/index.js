import React,{useState} from "react"
import { VerificationPin } from "react-verification-pin";
const YourComponent = () => {
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
        setStatus("success");
      }, 30000);
    }
  };

  return (
    <VerificationPin
      type="number"
      inputsNumber={5}
      status={status}
      title="Kodni tasdiqlang"
      subTitle="Emailingizga kod yuborildi"
      onFinish={handleOnFinish}
    />
  );
}
export default YourComponent