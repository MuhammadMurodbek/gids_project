import { Upload, message } from 'antd';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import React, { useState } from 'react'
import Spinner from "../../../../components/atom/loading.spinner.line";
import { useTranslation } from 'react-i18next';

const { Dragger } = Upload;
const Gallery = ({ role, setCallback }) => {
    const [load, setLoad] = useState(false)
    const { t } = useTranslation()
    const token = JSON.parse(localStorage.getItem("user_token"))
    const props = {
        name: 'video',
        multiple: false,
        method: 'PUT',
        action: `http://165.232.76.226/api/${role}s/edit/video/`,
        headers: {

            'Authorization': `Bearer ${token?.access}`,
        },
        onChange: (info) => {
            const { status } = info.file;
            setLoad(true)
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                setCallback(prev => !prev)
                setLoad(false)
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                setCallback(prev => !prev)
                setLoad(false)
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop: (e) => {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    return (
        <div>
            <div className="text_title" >
                <b > {t("Galarey.Partfolio")} </b>
            </div>
            <Dragger {...props} className="dragger" >
                <p className="  news11" >
                    <FileUploadIcon className="icon" />
                </p>


            </Dragger>

            <div className="galarey">
                <b >{t("Galarey.galarey")}</b>
            </div>

            {
                load ? <Spinner marginTop="100px" width={50} height={50}>loading...</Spinner> : null
            }
        </div>
    )
}

export default Gallery
