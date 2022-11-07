import Loader from "react-loader-spinner";
import React from "react"
import {mainGreen} from "../../../styles/global/colors"

const Index = ({color, width, height, marginTop}) => {
  // return (
  //   <div style={{width: '100%', height: '100%', lineHeight: '100%',textAlign: 'center', marginTop: `${marginTop}`}}>
  //     <Loader type="BallTriangle" color={color || mainGreen} height={height || 30} width={width || 30} />
  //   </div>
  // )
  return (
      <Loader type="BallTriangle" color={color || mainGreen} height={height || 30} width={width || 30} />
  )
}
export default Index 