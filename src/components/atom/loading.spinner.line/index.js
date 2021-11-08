import Loader from "react-loader-spinner";
import React from "react"
import {mainGreen} from "../../../styles/global/colors"

const Index = ({color, width, height}) => {
  return (
    <div style={{width: '100%', height: '100%', lineHeight: '100%',textAlign: 'center'}}>
      <Loader type="Oval" color={color || mainGreen} height={height || 30} width={width || 30} />
    </div>
  )
}
export default Index 