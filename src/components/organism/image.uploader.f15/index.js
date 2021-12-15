import React, { useState } from 'react'
import ImageUpload from 'image-upload-react'
import 'image-upload-react/dist/index.css'
import { Wrapper } from "./style"
import DeleteIcon from '@mui/icons-material/Delete';
function App(props) {
  const [imageSrc, setImageSrc] = useState()
  const { width, height, radius, minHeight, maxHeight, upload, setUpload } = props


  const handleImageSelect = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]))
    setUpload(e.target.files[0])
  }
  console.log(upload?.name)
function delete1(){
  setImageSrc('')
}
  return (
    <Wrapper width={width}>
      <div className='div11'>
        <ImageUpload
          handleImageSelect={handleImageSelect}
          imageSrc={imageSrc}
          setImageSrc={setImageSrc}
          style={{
            width: width,
            height: height,
            minHeight: minHeight,
            maxHeight: maxHeight,
            background: "#e3e3e3a6",
            borderRadius: radius,
            border: "none",
            overflow: 'hidden',
            boxShadow: '2px 3px 10px -5px rgba(0, 0, 0, 0.1)'
          }}
        />
        <DeleteIcon onClick={delete1} className='delete'/>
      </div>
    </Wrapper>
  )
}

export default App