import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import React,{useState} from 'react'
import Spinner from "../../../../components/atom/loading.spinner.line";
const { Dragger } = Upload;

const Gallery = ({role, setCallback}) => {
    const [load, setLoad] = useState(false)
    const token = JSON.parse(localStorage.getItem("user_token"))
    const props = {
        name: 'video',
        multiple: false,
        method: 'PUT',
        action: `http://165.232.76.226/api/${role}s/edit/video/`,
        headers: {
            // 'Content-Type': 'application/json',
            'Authorization': `Bearer ${token?.access}`,
        },
        onChange: ( info ) => {
            const { status } = info.file;
            setLoad(true)
            if ( status !== 'uploading' )
            {
                console.log( info.file, info.fileList );
            }
            if ( status === 'done' )
            {
                setCallback(prev=>!prev)
                setLoad(false)
                message.success( `${ info.file.name } file uploaded successfully.` );
            } else if ( status === 'error' )
            {
                setCallback(prev=>!prev)
                setLoad(false)
                message.error( `${ info.file.name } file upload failed.` );
            }
        },
        onDrop: ( e ) => {
            console.log( 'Dropped files', e.dataTransfer.files );
        },
    };
    return (
        <div>
            
            <Dragger { ...props } style={{marginTop:30}}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                </p>
            </Dragger>
            {
                load ? <Spinner marginTop="40px" width={ 50 } height={ 50 }>loading...</Spinner>:null
            }
        </div>
    )
}

export default Gallery
