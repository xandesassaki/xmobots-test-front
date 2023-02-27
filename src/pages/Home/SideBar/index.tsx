import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import './styles.scss'
import { useAerodromeData } from '../../../contexts/AerodromeContext';

interface IProps{
    selectPage: (selectedComponent: string) => void;
}

export const SideBar: React.FC<IProps> = (props : IProps) => {
    const [signedEmail, setSignedEmail] = useState<String>('');
    const { setJsonData } = useAerodromeData();

    useEffect(()=>{
        const storagedEmail = localStorage.getItem('user');
        storagedEmail !== null && setSignedEmail(JSON.parse(storagedEmail));
    },[])

    return (
        <div id="SideBar">
            <div onClick={() => props.selectPage('mapSection')}>
                <label>Welcome</label>
                <label>{signedEmail}</label>
            </div>
            <div onClick={() => props.selectPage('register')}>
                <label>Register</label>
            </div>
            <div>
                <Upload
                    style={{ padding: 'auto'}}
                    accept=".json"
                    beforeUpload={(file) => {
                        const reader = new FileReader();
                        reader.onload = () => {
                            const fileContent = JSON.parse(reader.result as string);
                            setJsonData(fileContent);
                        }
                        reader.readAsText(file);
                        props.selectPage('aerodromesList');
                        return false;
                    }}
                >
                    <Button icon={<UploadOutlined />}>Upload here</Button>
                </Upload>
            </div>
        </div>
    )
}