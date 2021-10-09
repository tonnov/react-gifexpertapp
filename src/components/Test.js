import React, { useEffect, useState } from 'react'
import data from '../mock/data.json';

const getRemoteData = () => {
    // try {
    //     const response = await fetch('https://cdn.glitch.com/760886e0-5f1f-4216-9a2e-0e0c7c7797eb%2Fbuilds.json?v=1602261849911');
    //     const data = await response.json();
    //      return data;
    // } catch (error) {
    //     console.log(error)
    // }
    return data;
}

const getFails = (data) => {
    if(!data) return;
    return data.filter( item => item.result !== 'SUCCESS')
}

const getFailPct = (data) => {
    const fails = getFails(data);
    const total = data.length;
    const failsCount = fails.length;
    const pct = (failsCount / total) * 100;
    return pct;
}

export const Test = () => {
    const [ dataset, setDataset ] = useState(null);
    const [ failPct, setFailPct] = useState(0);
    const [leadTime, setLeadTime] = useState({});

    useEffect(() => {
        const runAsync = async () => {
            const data = await getRemoteData();
            setDataset(data);
        }

        runAsync();
    }, [])

    useEffect(() => {
        if (!dataset) return;

        const pct = getFailPct(dataset);
        setFailPct(pct);

        const initialState = {
            total: 0,
            duration: 0
        }

        const totalSucceed = dataset.reduce((acc, item) => {
            if (item.result === 'SUCCESS') {
                acc = {
                    total: acc.total + 1,
                    duration: acc.duration + item.duration
                }
            }
            return acc;
        }, initialState);

        const totalFailed = dataset.reduce((acc, item) => {
            if (item.result !== 'SUCCESS') {
                acc = {
                    total: acc.total + 1,
                    duration: acc.duration + item.duration
                }
            }
            return acc;
        }, initialState);

        const ms =  1000*Math.round((totalSucceed.duration)/1000);
        const d = new Date(ms);
        console.log( d.getUTCHours() + ':' + d.getUTCMinutes() + ':' + d.getUTCSeconds() );

        const success = Math.ceil(totalSucceed.duration / totalSucceed.total / 60000 );
        const fails = Math.ceil(totalFailed.duration / totalFailed.total / 60000 );

        console.log(totalSucceed);

        setLeadTime({ success, fails });

    },[dataset])

    // console.log(dataset);
    return (
        <>
            <h3>Change Fail Percentage</h3>
            <p>{failPct.toFixed(2)}%</p>
            <h3>Lead time for changes</h3>
            <ul>
                <li>Success Time: {leadTime.success} Minutes</li>
                <li>Fail Time: {leadTime.fails} Minutes</li>
            </ul>
        </>
    )
}

export default Test
