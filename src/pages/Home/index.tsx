import React from 'react'
import { MapSection } from './MapSection'
import { SideBar } from './SideBar'
import './styles.scss'

export const Home: React.FC = () => {
    return (
        <React.Fragment>
            <SideBar />
            <MapSection />
        </React.Fragment>
    )
}