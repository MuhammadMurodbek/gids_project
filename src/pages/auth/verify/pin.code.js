import React, { useState } from "react"
import { VerificationPin } from "react-verification-pin";
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { post_auth_reg_check_action } from "../../../redux/actions"
import { toast } from "react-hot-toast";
import "./style.css"
import {getGlobals} from "../../../hooks/response_get"
const YourComponent = () => {
  const history = useHistory()
  const [status, setStatus] = useState("process");
  const dispatch = useDispatch()
  const selector = useSelector(prev => prev.post_auth_reg_check_reducer)
  const handleOnFinish = (code) => {
    setStatus("wait");
    let obj = {
      username: localStorage.getItem('email'),
      code: code,
    }
    dispatch(post_auth_reg_check_action(obj))
  };
  React.useEffect(() => {
    if (selector) {
      if (selector.status === 200) {
        const { data } = selector?.data
        getGlobals(data)
        // console.log(selector)
        localStorage.setItem('user_token', JSON.stringify(data))
        data?.role === "simple_user" ?
          window.location.href = "/gid-personal"
          : window.location.href = "/gid-personal-wider"
      }
      if (selector.status === 400) {
        toast.error("Qaytadan urinib ko'ring")
      }
    }
  }, [selector])
  return (
    <div style={{position:'relative'}}>
      <VerificationPin
        type="number"
        inputsNumber={5}
        status={status}
        title="Kodni tasdiqlang"
        subTitle="Emailingizga kod yuborildi"
        onFinish={handleOnFinish}
      />
    </div>
  );
}
export default YourComponent