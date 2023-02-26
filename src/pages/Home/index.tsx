import React, { useState } from 'react'
import { AerodromeJsonDataProvider } from '../../contexts/AerodromeContext'
import { AerodromesList } from './AerodromesList'
import { MapSection } from './MapSection'
import { Register } from './Register'
import { SideBar } from './SideBar'
import './styles.scss'

export const Home: React.FC = () => {
    const [activeComponent, setActiveComponent] = useState<string>('mapSection');

    const selectPage = (selectedComponent: string) => {
        setActiveComponent(selectedComponent);
    }

    return (
        <div id="Home">
            <AerodromeJsonDataProvider>
                <SideBar selectPage={selectPage} />
                {activeComponent === 'mapSection' && <MapSection />}
                {activeComponent === 'register' && <Register />}
                {activeComponent === 'aerodromesList' && <AerodromesList />}
            </AerodromeJsonDataProvider>
        </div>
    )
}