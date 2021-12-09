import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import ImageCrop from "../../organism/image.crop.gallery/new";
import {CloseCircleFilled} from "@ant-design/icons"
import {deleteResponse} from "../../../hooks/response_get"
import 'animate.css';
function App({list, setCallback, role}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [large, setLarge] = useState();
  const [deleteItem, setDeleteItem] = useState()
  const images = list.map(item=>item.src) || [];
  const [loading, setLoading] = useState(false);
  const openImageViewer = useCallback((index, src) => {
    let indexCurrent = list.findIndex(prev=>prev.id===index);
    setCurrentImage(indexCurrent || 0);
    setIsViewerOpen(true);
    setLarge(src)
    console.log(src)
  }, []);
  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  const handleDelete = (index, src) => {
    console.log(index, src)
    console.log(list)
    let imageDelete = list.find(prev=>prev.src===src)
    if(imageDelete){
      setDeleteItem(imageDelete?.id)
      deleteResponse(`/api/${role}s/edit/certificate/${imageDelete?.id}/`, '', setCallback)
    }
  }
  return (
    <div style={{display: 'inline-block', position:'relative', zIndex:9}}>
      {
        list.map((item) => (
          <>
            <img
              src={ item?.src }
              onClick={ () => openImageViewer(item.id,item?.src) }
              width="auto"
              height="300"
              key={ item?.id }
              style={{ margin: '2px' }}
              alt=""
              className={deleteItem === item.id ? "animate__animated animate__shakeX":''} 
            />
            <span 
              style={
                {
                  position: 'absolute', 
                  width:100, 
                  height:100, 
                  zIndex:1,
                }
              }
            >
              <CloseCircleFilled 
                onClick={() =>handleDelete(item?.id, item?.src)}
                // className="animate__animated animate__slideInDown"
                style={
                  {
                    color:"#dfd9db", 
                    fontSize:'25px', 
                    position:'relative', 
                    left:'-35px', 
                    top:'14px',
                    color:'#acacac',
                    boxShadow:'0 0 5px 3px rgba(0,0,0,0.07)',
                    borderRadius:'50%'
                  }
                }
              />
            </span>
          </>
      ))
    }

    <ImageCrop role={role} loading={ loading } setLoading={ setLoading } list={ list } setCallback={setCallback}/>
      {isViewerOpen && (
        <>
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
          style={{position:'absolute',zIndex:999999}}
        />
      </>
      ) 
      }
    </div>
  );
}
export default App