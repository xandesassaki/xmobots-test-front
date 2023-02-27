import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Circle, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useAerodromeData } from '../../../contexts/AerodromeContext';
import { IAerodrome } from '../../../interfaces/AerodromeInterface';
import { DMS_COORDENATES_REGEX } from '../../../utils/regexUtils';
import { formatDMSToLatLon } from '../../../utils/DMSUtils';
import { IMapPoint } from '../../../interfaces/MapInformationInterface';

export const MapSection: React.FC = () => {
    const { jsonData } = useAerodromeData();
    const [mapPoint, setMapPoint] = useState<IMapPoint[]>([]);
    const [descriptions, setDescriptions] = useState<String[]>([])

    useEffect(()=>{
        if(jsonData){
            const newMapPoint: IMapPoint[] = [];
            const newDescription: String[] = [];

            jsonData.aerodromes.forEach((aerodrome: IAerodrome) => {
                newDescription.push(aerodrome.description)

                const isolatedDMS = aerodrome.description.match(DMS_COORDENATES_REGEX);
                if(isolatedDMS){
                    const formattedCooordinates = formatDMSToLatLon(isolatedDMS[0]);
                    newMapPoint.push(formattedCooordinates)
                } else {
                    newMapPoint.push({latitude: -10.985277777777778, longitude: -4.2844444444444445})
                }
            });
            setDescriptions(newDescription);
            setMapPoint(newMapPoint);
        }
    }, [jsonData])

    const pointWithDescription = descriptions.map((value, index) => {
        const coordsArray = mapPoint[index];
        return { description: value, latitude: coordsArray.latitude, longitude: coordsArray.longitude};
    });

    return (
        <div id="map">
            <MapContainer center={[-16.23861388888888888, -49.6444694444444445]} zoom={8} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {pointWithDescription.map((point, index) => (
                    <React.Fragment key={index}>
                        <Marker position={[point.latitude, point.longitude]}>
                            <Popup>
                                {point.description}
                            </Popup>
                        </Marker>
                        <Circle center={[point.latitude, point.longitude]} radius={5000} />
                    </React.Fragment>
                ))}
            </MapContainer>
        </div>
    )
}