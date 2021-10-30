import Loader from "react-loader-spinner";
import React from "react"
import {mainGreen} from "../../../styles/global/colors"

const Index = ({color, width, height}) => {
  return (
    <Loader type="TailSpin" color={color || mainGreen} height={height || 30} width={width || 30} />
  )
}
export default Index 