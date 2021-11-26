import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import React,{useState} from 'react'
const { Dragger } = Upload;

const Gallery = ({role}) => {
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
                setLoad(false)
                message.success( `${ info.file.name } file uploaded successfully.` );
            } else if ( status === 'error' )
            {
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
                load ? <h4>loading...</h4>:null
            }
        </div>
    )
}

export default Gallery
