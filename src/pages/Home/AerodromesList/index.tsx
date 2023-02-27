import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { useAerodromeData } from '../../../contexts/AerodromeContext'
import { IAerodrome } from '../../../interfaces/AerodromeInterface'
import { DMS_COORDENATES_REGEX } from '../../../utils/regexUtils';
import './styles.scss'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'City',
        dataIndex: 'city',
        key: 'city'
    },
    {
        title: 'DMS',
        dataIndex: 'dms',
        key: 'dms'
    },
    {
        title: 'Created Date',
        dataIndex: 'created_at',
        key: 'created_at'
    },
    {
        title: 'Runway amount',
        dataIndex: 'runway_amount',
        key: 'runway_amount'
    }
];

export const AerodromesList: React.FC = () => {
    const { jsonData } = useAerodromeData();
    const [dataSource, setDataSource] = useState<object[]>([]);

    useEffect(()=>{
        if(jsonData){
            const newDataSource: object[] = [];

            let i = 0;
            jsonData.aerodromes.forEach((aerodrome: IAerodrome) =>{
                newDataSource.push({
                    key: i++,
                    name: aerodrome.name,
                    city: aerodrome.city,
                    dms: aerodrome.description.match(DMS_COORDENATES_REGEX),
                    created_at: aerodrome.created_at,
                    runway_amount: aerodrome.runways.length
                });
            });
            setDataSource(newDataSource);
        }else{
            setDataSource([
                {
                    key: null,
                    name: null,
                    city: null,
                    dms: null,
                    created_at: null,
                    runway_amount: null
                }
            ])
        }
    }, [jsonData]);

    return (
        <div id="AerodromesList">
            <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>
    )
}