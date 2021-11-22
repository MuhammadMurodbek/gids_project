import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import ImageCrop from "../../organism/image.crop.gallery/new";
import 'animate.css';
function App({list, setCallback}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = list.map(item=>item.src) || [];
  const [loading, setLoading] = useState(false);
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div style={{display: 'inline-block'}}>
      {
        images.map((src, index) => (
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
          width="auto"
          // maxWidth="400"
          height="300"
          key={ index }
          style={{ margin: '2px' }}
          alt=""
          className="animate__animated animate__fadeInLeft"
        />
      ))
    }
    <ImageCrop loading={ loading } setLoading={ setLoading } list={ list } setCallback={setCallback}/>

      {isViewerOpen && (
        <>
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
      </>
      ) 
      }
    </div>
  );
}
export default App