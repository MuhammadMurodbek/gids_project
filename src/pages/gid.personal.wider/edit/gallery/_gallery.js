import { Upload, message } from "antd";
// import FileUploadIcon from '@material-ui/icons/FileUpload';
import React, { useState } from "react";
import Spinner from "../../../../components/atom/loading.spinner.line";
import { useTranslation } from "react-i18next";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

const { Dragger } = Upload;
const Gallery = ({ role, setCallback }) => {
  const [load, setLoad] = useState(false);
  const { t } = useTranslation();
  const token = JSON.parse(localStorage.getItem("user_token"));
  const props = {
    name: "video",
    multiple: false,
    method: "PUT",
    action: `https://api.gits.uz/api/${role}s/edit/video/`,
    headers: {
      Authorization: `Bearer ${token?.access}`,
    },
    onChange: (info) => {
      const { status } = info.file;
      setLoad(true);
      if (status !== "uploading") {
        // console.log(info.file, info.fileList);
      }
      if (status === "done") {
        setCallback((prev) => !prev);
        setLoad(false);
        message.success(`${info.file.name} file muofaqiyatli yuklandi.`);
      } else if (status === "error") {
        setCallback((prev) => !prev);
        setLoad(false);
        message.error(`${info.file.name} file yuklanmadi .`);
      }
    },

    onDrop: (e) => {
      // console.log('Dropped files', e.dataTransfer.files);
    },

    beforeUpload(file) {
      // console.log(file)
      // const videoFormat = file.type === "video/wmv" || file.type === "video/mp4" || file.type === "video/mov" || file.type === "video/avi" || file.type === "video/mkv" || file.type === "video/webm" || file.type === "video/flv" || file.type === "video/x-matroska" || file.type === 'video/quicktime'  ;
      // if (!videoFormat) {
      //     message.error("video formati notog'ri tanlangan");
      //     setLoad(false)
      // }
      const videoSize = file.size / 1024 / 1024 < 100;
      if (!videoSize) {
        message.error("videoni hajmi juda katta max(100Mb)");
        setLoad(false);
      }
      // console.log(videoSize)
      // console.log(file.type)
      return videoSize;
    },
  };

  return (
    <div>
      <div className="text_title">
        <i>
          <b> {t("Galarey.Partfolio")} </b>
          <br />
           {t("Galarey.Partfolio2")}  
        </i>
      </div>
      <Dragger {...props} className="dragger">
        {load ? (
          <Spinner marginTop="100px" width={50} height={50}>
            loading...
          </Spinner>
        ) : (
          <p className="  news11">
            <DriveFolderUploadIcon className="icon" />
          </p>
        )}
      </Dragger>

      <div className="galarey">
        <b>{t("Galarey.galarey")}</b>
      </div>

      {load ? (
        <Spinner marginTop="100px" width={50} height={50}>
          loading...
        </Spinner>
      ) : null}
    </div>
  );
};


export default Gallery;
