import React from 'react';

function Launche({launches}) {

    return (
        <div>
            {
                <div>
                    <p><b>Mission Name:</b>{launches['mission_name']}</p>
    <p><b>Launch Year:</b>{launches['launch_year']}</p>
                    <img src={launches['links'][`mission_patch_small`]}/>
                </div>
            }

        </div>
    );
}

export {Launche};