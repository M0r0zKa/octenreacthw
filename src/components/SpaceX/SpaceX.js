import React, {useEffect, useState} from 'react';
import {Launche} from "./Launche";

function SpaceX(props) {

    const [launches,setLaunches] = useState([])

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(launch =>{
                let arrLaunch  = launch.filter(item => item['launch_year'] != 2020)
                setLaunches(arrLaunch)
                }
            )},[])




    return (
        <div>
            {
                launches.map(item=><Launche launches={item}/>)
            }
        </div>
    );
}

export {SpaceX};