import React, { useState } from 'react'
import ImageUpload from 'image-upload-react'
import 'image-upload-react/dist/index.css'
import {Wrapper}  from "./style"

function App(props) {
  const {width, height, radius, minHeight, maxHeight} = props  
  const [imageSrc, setImageSrc] = useState()

  const handleImageSelect = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]))
  }

  return (
      <Wrapper width={width}>
          <ImageUpload
            handleImageSelect={handleImageSelect}
            imageSrc={imageSrc}
            setImageSrc={setImageSrc}
            style={{
              width: width,
              height: height,
              minHeight:minHeight,
              maxHeight:maxHeight,
              background: "#e3e3e3a6",
              borderRadius: radius,
              border:"none",
              overflow: 'hidden',
              boxShadow: '2px 3px 10px -5px rgba(0, 0, 0, 0.1)'
            }}
          />
      </Wrapper>
  )
}

export default App