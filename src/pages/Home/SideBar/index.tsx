import React, { useEffect, useState } from 'react'
import './styles.scss'

export const SideBar: React.FC = () => {
    const [signedEmail, setSignedEmail] = useState<String>('')

    useEffect(()=>{
        const storagedEmail = localStorage.getItem('user');
        storagedEmail !== null && setSignedEmail(JSON.parse(storagedEmail))
    },[])

    return (
        <div>
            <p>SideBar</p>
            <p>{signedEmail}</p>
        </div>
    )
}